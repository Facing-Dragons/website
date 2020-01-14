<template>
    <div class="team-section container-fluid row">
        <h2>
            <span class="red-text">
                The
            </span>
            Team
        </h2>
        <hr>
        <div class="team-text">
            This is about our team and the people! Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Pariatur temporibus quibusdam accusantium ullam hic consectetur 
            iure excepturi at, earum dolorem! Odio praesentium, quibusdam aperiam saepe quia 
            explicabo veritatis amet quam.
        </div>
        <div class="photos row">
            <div
                v-for="member in teamMembers"
                :key="member.name"
                class="member-item col-xs-4 col-md-4 px-2 d-flex flex-column"
            >   
                <img src="~/assets/img/moh.jpg" class="team-member-image m-2" alt="">
                <div 
                    class="social-media-icons p-2 d-flex flex-wrap justify-content-center align-items-center"
                >
                    <a 
                        v-for="social in member.socialMedia"
                        :href="social.link" 
                        :key="social.name" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div
                            class="icon-container p-2 m-2"
                        >
                            <font-awesome-icon :icon="social.icon.split(' ')"/>
                        </div>
                    </a>
                </div>
                <div class="description p-2 text-center">
                    {{member.description}}
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        const teamMembers = [
            { 
                name: "Brodie",
                role: "CEO",
                description: `Owner and CEO of Facing Dragons, is a Certified Professional Co-active Coach (CPCC).
                 Brodie has extensive experience working one-on-one and in groups, and has a reputation for his 
                 ability to connect with and motivate teens and young adults. 
                 He understands people at a core level and is highly skilled at helping people reach their 
                 goals and create lasting transformations.`,
                image: "",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Dov",
                role: "Game Design Researcher",
                description: `Dov Schafer, Gaming Design Researcher, is a PhD candidate at Simon Fraser 
                University in British Columbia. He is studying peoples’ motivation to play video games 
                and how to create mixed reality games that are customized to an individual’s learning 
                needs. Dov is a lifelong gamer with a deep knowledge of game design and mechanics.`,
                image: "",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Stephan",
                role: "Lorem Ipsum!?",
                description: `Stephen Urquhart is their business wizard, helping develop strategic 
                partnerships, access grants, and connect with investors to make this all possible. 
                Stay tuned for more information on how you can be involved with the Facing Dragons 
                game, as well as their upcoming Kickstarter Campaign and official release date!`,
                image: "",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Osama",
                role: "Lorem Ipsum!?",
                description: `Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!`,
                image: "",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
            { 
                name: "Mohammad",
                role: "Lorem Ipsum!?",
                description: `Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!
                Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!Lorem Ipsum!`,
                image: "",
                socialMedia: [
                    {
                        name: "Facebook",
                        link: "",
                        icon: "fab facebook"
                    },
                    {
                        name: "Twiiter",
                        link: "",
                        icon: "fab twitter"
                    },
                    {
                        name: "Instagram",
                        link: "",
                        icon: "fab instagram"
                    }
                ]
            },
        ];
        return {
            teamMembers
        }
    }
}
</script>

<style scoped>
    .team-section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .team-member-image {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
    }

    .red-text {
        color: red;
    }

    .icon-container {
        width: 3rem;
        height: 3rem; 
        background-color: #2b2b2b;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.2rem;
    }
</style>