//get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        pendingMessage: 4,
        location: "Delhi India",
        name: "Hashita",
        age: 23,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "writting"
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia fugit eos suscipit, voluptatum et.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1525925945132-737274bceb65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location: "Bhopal India",
        name: "Shivangi",
        age: 26,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "writting"
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia fugit eos suscipit, voluptatum et.",
        isFriend: null,
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 14,
        location: "Bangalore India",
        name: "Nishi",
        age: 26,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "writting"
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia fugit eos suscipit, voluptatum et.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1586770802838-e524ec9018a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Delhi India",
        name: "Avinya",
        age: 7,
        interests: [
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "music"
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "writting"
            },
        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia fugit eos suscipit, voluptatum et.",
        isFriend: null,
    },
];


let curr = 0;
let isAnimation = false;

function setData(index) {
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;



    let clutter = "";
    users[index].interests.forEach(function (interest) {
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
${interest.icon}<h3 class="text-sm tracking-tighter capitalize">${interest.interest}</h3>
</div>`
    });

    select(".tags").innerHTML = clutter;

    select(".bio").textContent = users[index].bio;
}

function select(elem) {
    return document.querySelector(elem);
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    setData(curr);

    curr = 2;
})();

function imageChange() {
    if (!isAnimation)
        isAnimation = true;
    let tl = gsap.timeline({
        onComplete: function () {
            isAnimation = false;
            let main = select(".maincard");
            let incoming = select(".incomingcard");

            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");

            gsap.set(main, {
                scale: 1,
                opacity: 1
            })
            if (curr === users.length)
                curr = 0;

            select(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard")
        }
    });
    tl.to(".maincard", {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: .9
    }, "a")
        .from(".incomingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
    })
})

accept.addEventListener("click", function () {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%",
        opacity: 0,
        stagger: .1,
        ease: Power4.easeInOut,
        duration: 1.5
    })
})

function containerCreator() {
    document.querySelectorAll(".element")
        .forEach(function (element) {
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        })
}
containerCreator();

