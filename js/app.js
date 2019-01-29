var usermenu = new Vue({
    el: '#usermenu',
    data: {
        username: 'trungler'
    }
})

var postbody = new Vue({
    el: '#postbody',
    data: {
        title: 'A Critique of Technical Jargon',
        author: 'Author Name',
        date: '02-01-2019',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sunt aperiam impedit eligendi quos, rem, quo et commodi exercitationem, accusantium delectus. Id officia vel possimus. Beatae incidunt debitis tempora eum officia distinctio hic nemo ducimus, illo quo facilis, ut alias nesciunt expedita inventore ab? Itaque vero sit ut dignissimos, at accusamus laboriosam repellat omnis, animi suscipit cupiditate repellendus fugiat voluptates odio! Quaerat provident veritatis, assumenda quas dolores, a, quos cumque quae accusamus minus ea nemo ipsa perspiciatis facilis blanditiis deserunt enim? Et veritatis, cupiditate corporis praesentium, amet quod doloribus deleniti incidunt reprehenderit, magnam necessitatibus quasi doloremque neque? Eligendi fuga ipsum possimus architecto nemo numquam ea error sapiente placeat! In perspiciatis, impedit officiis eaque explicabo est quidem dicta accusantium tempore deleniti illum consequuntur fugiat nam ipsam laborum qui fugit omnis ab animi porro? Reprehenderit minus temporibus eveniet architecto hic maxime, ad atque consectetur excepturi, porro laudantium. Necessitatibus aliquid neque porro quia praesentium mollitia perferendis? Consequatur itaque veniam laborum distinctio vero, quibusdam explicabo quia quod consequuntur necessitatibus nesciunt eum velit, optio esse ea alias assumenda omnis ad laboriosam. Commodi, tempora quisquam. Modi sed eum facilis in vel deleniti, quas dolorem reiciendis! Ratione at voluptatem cumque aspernatur dolore repellat eos eius esse quas.',
    }
})

var commentbody = new Vue({
    el: '#commentbody',
    data: {
        author: 'Author Name',
        date: '02-01-2019',
        content: 'Commodi, tempora quisquam. Modi sed eum facilis in vel deleniti, quas dolorem reiciendis! Ratione at voluptatem cumque aspernatur dolore repellat eos eius esse quas.',
    }
})

// menu hide/show on hover
// document.getElementById