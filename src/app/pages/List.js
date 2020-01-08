import Card from '../components/cards';

export default {
    render: async () => `<div>
        List page
        <section>
            Testin1
            ${await Card.render()}
        </section>
    </div>`
};
