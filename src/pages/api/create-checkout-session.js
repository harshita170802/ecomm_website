const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    const { email,items } = req.body;

    const transformedItems = items?.map((item) => ({
        quantity: 1,
        price_data: {
            currency: 'inr',
            unit_amount: item.price * 100,
            product_data: {
                name: item.name,
                description: item.description,
                images: [item.image],
            }
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card',],
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 0,
                        currency: 'inr',
                    },
                    display_name: 'Free shipping',
                    
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 5,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 7,
                        },
                    }
                }
            },
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 15000,
                        currency: 'inr',
                    },
                    display_name: 'Next day air',
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 1,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 1,
                        },
                    }
                }
            },
        ],

        shipping_address_collection: {
            allowed_countries: ['IN','US'],
        },
        line_items: transformedItems,
        mode: 'payment',

        success_url: `${process.env.HOST}/thankyou`,
        cancel_url: `${process.env.HOST}/buyproduct`,
        metadata: {
            email,
        }
    })
    res.status(200).json({ id: session.id });

}
