// Type
export type ripplet_introduction = {
    highlight?: string,
    bold?: string,
    normal: string,
    color?: string,
};

export type navbar = {
    label: string,
    link: string,
    button: boolean,
};

export type about_us = {
    title: string,
    content: string[],
};

export type participate = {
    title: string,
    content: string[],
    button_text: string,
};

// English Content  
export const en_navbar: navbar[] = [
    {
        label: "About Us",
        link: "/about",
        button: false
    },
    {
        label: "Participate",
        link: "/participate",
        button: true
    },
];

export const en_ripplet_introduction: ripplet_introduction[] = [
    {
        highlight: "Embrace",
        normal: "your feelings",
        color: "text-red-500"
    },
    {
        highlight: "Vocalize",
        normal: "your journey",
        color: "text-orange-400"
    },
    {
        highlight: "Support",
        normal: "your community",
        color: "text-purple-800"
    }
];

export const en_about_us: about_us = {
    title: "About Ripplet",
    content: [
        "Ripplet is a community-initiated wellness platform for Chinese speakers across the globe, in relevance to our own cultures and beliefs.", 
        "We understand the mental health needs and challenges for people with Asian backgrounds, and we are dedicated to raising self-care awareness by providing a safe space to express personal feelings, share self-care journeys, and receive culturally aware emotional support.",
        "Founded in 2023, we have an extensive network of survivors and peer support specialists to provide timely help on your wellness journey."
    ]
};

export const en_participant: participate = {
    title: "Participant",
    content: [
        "We are looking for participants aged 18 to 25 to participate in our small-sized peer support groups.", 
        "The cohort will happen every Saturday or Sunday for 5 weeks, in the form of 5 support group meetings with a total of 5 themes.",
        "Participants could choose to participate in one or more topics of interest."
    ],
    button_text: "Join as participant"
};

export const en_facilitator: participate = {
    title: "Facilitator",
    content: [
        "We are looking for peer support specialists and future practitioners to join our supporter team.",
        "While we prioritize those with experiences, it is not a requirement as training will be provided if you are selected to participate in our program.",
        "We will reach out to you at our earliest convenience after you sign up.",
    ],
    button_text: "Join as facilitator"
};

// Chinese Content
export const cn_navbar: navbar[] = [
    {
        label: "关于我们",
        link: "/about",
        button: false
    },
    {
        label: "加入我们",
        link: "/participate",
        button: true
    },
];

export const cn_ripplet_introduction: ripplet_introduction[] = [{
    bold: "认知，分享，互助",
    normal: "Ripplet让你在自我关怀的路上不再孤单"
}];

export const cn_about_us: about_us = {
    title: "关于我们",
    content: [
        "Ripplet 为年轻华人群体提供一个安全的空间，让大家在自我成长的路上可以获得温暖的支持和陪伴。",
        "Ripplet成立于2023年，旨在为全球年轻华人提供实时且有效的情感支持。我们致力于构建一个安全的环境，使人们能够没有负担地表达感受，分享自我成长的经历，并在这个过程中找到共鸣和回应。",
        "我们希望在华人心理专家和朋辈的陪伴下，大家能在被深度共情的过程中养成关爱自我的习惯，并最终基于强烈的自我认同感去在现实生活中建立深度的社交关系。",
    ]
};

export const cn_participant: participate = {
    title: "小涟漪",
    content: [
        "我们正在寻找18-25岁的华人加入“涟漪计划”。活动将在周末进行，为期5周。参与者可以在5个主题中，选择一场或多场感兴趣的活动参加。我们的小组会将由拥有同辈支持经验的心理从业人员带领，大家可以从个人经历出发，在讨论中找寻共鸣。",
    ],
    button_text: "成为参与者",
};

export const cn_facilitator: participate = {
    title: "小水滴",
    content: [
        "与此同时，我们也在招募正在受训/持证的心理咨询师，社会工作者和心理学家。无论你有没有朋辈支持的经验，如果你对我们的项目感兴趣的话，都欢迎你在这里上传简历。我们之后会联系你提供进一步的朋辈支持者培训。",
    ],
    button_text: "成为激励者",
};

// ----------------------------------- new contents ----------------------------------------

export type home_page_type = {
    title: string,
    content: string,
    button_text: string,
    button_link: string,
}

export type card_type = {
    title: string,
    sub_title: string,
    content_short_version: string,
    content_complete_version: string[],
}

export const en_home_page: home_page_type = {
    title: "Empower Your Journey of Self-Growth",
    content: "Increase present-moment awareness, maintain energy levels, and build resilience and perseverance throughout your self-growth journey with Ripplet.",
    button_text: "Join the beta",
    button_link: "https://forms.gle/RYuNdLpzugrCPdA28",
}

export const cn_home_page: home_page_type = {
    title: "Ripplet让你在自我成长的路上不再孤单",
    content: "和Ripplet一起，提高对当下的觉察，维持能量水平，并在自我成长的旅程中培养韧性和毅力。",
    button_text: "加入试用",
    button_link: "https://forms.gle/RYuNdLpzugrCPdA28",
}

export const en_journal: card_type = {
    title: "Guided Journaling",
    sub_title: "To Raise Awareness",
    content_short_version: "By identifying patterns in your feelings and behaviors, and understanding how different activities influence your mood and energy levels.",
    content_complete_version: [
        "Journaling is a powerful tool for understanding your emotions, tracking activities, and capturing empowering moments. ",
        "Ripplet provides curated prompts that guide your reflections and help you explore specific aspects of your life. By writing down your experiences, you can identify patterns in your feelings and behaviors, leading to more informed decisions and personal growth. This reflective practice enhances self-awareness by revealing how activities affect your mood and energy levels.",
        "Our platform offers a secure, user-friendly space where you can use narrative therapy strategies. By viewing yourself as the narrator of your stories, you can effectively explore your thoughts and emotions, fostering deeper self-discovery and growth.",
    ]
}

export const cn_journal: card_type = {
    title: "引导记录",
    sub_title: "觉察是改变的开始",
    content_short_version: "通过观察过去的行为与感受，我们可以找出规律并尝试打破惯性，从而能更好地调节自己的情绪和管理自己的精力。",
    content_complete_version: [
        "写日记是了解自我的绝佳途径。",
        "当您想记录自己的感受、日常活动和充满能量的瞬间却不知从何写起时， Ripplet提供的引导语能帮你更好地梳理和回顾经历。通过观察过去的行为和感受，你可以找出规律并打破惯性，从而在未来做出更明智的决定，获得自我成长。这个过程也能帮助你去更好地调节自己的情绪和管理自己的精力。",
        "我们的平台提供了一个安全、友好的空间，让你能巧妙运用叙事疗法的策略。通过以第三人称视角探索自己的想法和感受，你将获得更深入的自我觉察，促进持续的个人成长。",
    ]
}

export const en_world: card_type = {
    title: "Community Support",
    sub_title: "To Maintain Energy Levels",
    content_short_version: "By getting emotional support and gaining practical tips from other members who have faced similar challenges and successfully navigated them.",
    content_complete_version: [
        "Celebrating milestones with our community and joining peer support groups can be incredibly motivating. ",
        "Ripplet provides a safe space where you can connect with others, share your own stories when you're ready, and find encouragement from people who understand your journey. It's not just about receiving emotional support—it's also an opportunity to gain practical tips from those who have faced similar challenges and successfully navigated them. ",
        "Whether you're looking for inspiration, advice, or simply a sense of belonging, our community is here to support you every step of the way.",
    ]
}

export const cn_world: card_type = {
    title: "社区支持",
    sub_title: "充满能量再继续前行",
    content_short_version: "通过获得同频共振的理解与支持，以及过来人的实用建议，我们能将许多瞬间转化为能量的源泉。",
    content_complete_version: [
        "在追求自我关怀的过程中，我们常常会感到孤独或能量不足。通过与社区成员共同庆祝每一个小小的胜利，或者参与朋辈互助茶话会，您能够及时获得正向反馈。",
        "Ripplet提供了一个可以与他人建立联系，分享个人经历的安全空间。您不仅可以从社区中获得理解和共鸣，还可以从那些有相似经历的人那里获得实用的建议，帮助您克服困难，继续前进。",
        "无论您是想找寻精神彼岸还是内心归属感，我们的社区都会在您成长的每一步给予支持。",
    ]
}

export const en_challenge: card_type = {
    title: "Expert-led Challenges",
    sub_title: "To Build Resilience",
    content_short_version: "By getting daily guidance and feedback from professionals and facilitators to equip you with the practical tools to achieve your personal development goals effectively. ",
    content_complete_version: [
        "In today's fast-paced world, many of us find it challenging to focus on mental well-being and personal growth. The pressure to make plans and maintain motivation can be overwhelming, often leading to stress and stagnation in self-improvement efforts. Without a structured approach, it can be difficult to manage emotions and energy levels effectively. ",
        "Ripplet’s 28-day challenges provide a solution by simplifying your personal development journey. Led by mental health professionals, these challenges focus on your own progress by addressing key topics like staying present, managing emotions, and maintaining balanced energy levels. Joining Ripplet connects you with a supportive community and offers daily guidance and feedback. ",
        "You'll gain valuable insights and build resilience, equipping you with the tools to achieve your personal development goals effectively. ",
    ]
}

export const cn_challenge: card_type = {
    title: "挑战自我",
    sub_title: "培养面对压力的心理韧性",
    content_short_version: "在专业指导下，我们能够学习有效调控情绪、合理分配精力，从而逐步培养应对各种压力和困境的心理韧性与毅力。",
    content_complete_version: [
        "在当今快节奏的世界中，我们许多人在心理健康和个人成长的道路上感到停滞。单单制订计划这件事就够消耗能量的了，而在执行计划的过程中，当初那股源自我们内心的强大驱动力，也往往会在不知不觉中变成令人难以承受的心理压力。由于缺乏系统专业的指导，在追求自我成长的历程中，我们往往会感到茫然无措，不知如何有效调控情绪、合理分配精力。",
        "我们邀请心理健康领域的专业人士设计涵盖不同心理健康主题的挑战。在28天的周期内，这些挑战能够助力您提升当下的觉察能力，在维持能量平衡的同时增强情绪管理能力，并且在自我成长的漫漫旅途中培养韧性与毅力。",
    ]
}

export const en_new_about_us: about_us = {
    title: "About Ripplet",
    content: [
        "Our platform creates a supportive environment where users can enhance their emotional awareness, effectively manage their energy levels, and cultivate resilience.",
        "Through guided journaling prompts, community support, and expert-led challenges, Ripplet offers a comprehensive approach to personal development tailored specifically for young Chinese speakers.",
        "We celebrate the uniqueness of each journey and encourage meaningful interactions that inspire growth and resilience. We are dedicated to offering resources and guidance that promote mental well-being, helping you navigate life's challenges with confidence and clarity.",
        "Join us at Ripplet, where your journey toward a fulfilling and balanced life is supported every step of the way.",
    ]
};

export const cn_new_about_us: about_us = {
    title: "关于我们",
    content: [
        "Ripplet致力于让全球年轻华语群体在自我成长的旅途中不再感到孤单。我们通过日志引导、社区支持和专家辅助等方式，从情感和认知层面为大家赋能。",
        "我们提供一个安全私密的空间，来帮助你深入觉知内心情绪，记录自我成长历程，并提供相应资源来辅助你的行为和决策。我们会悉心倾听各类独特的故事，于个体的差异之中探寻群体间的关联，让力量得以传递。我们整合与心理健康相关的自救资源以及专业指导，协助您从容应对生活中的种种挑战。",
        "在这里，我们荡起的涟漪将成为同频的共振。我们在这共振的一圈圈陪伴中探索连接，在安全的连接中开启新的旅程。",
    ]
};



export const en_storytellers: participate = {
    title: "Storytellers",
    content: [
        "Are you a Chinese speaker with an inspiring story of personal growth? Join our vibrant community and share your unique experiences on WeChat or RED. Your journey could inspire and uplift others, offering guidance and hope to those on similar paths.",
        "If you're willing to share your voice on our podcast, we can reach an even broader audience. Your story might light the way for others, providing the motivation they need to pursue their own growth.",
        "Help us create a tapestry of stories that resonate, empower, and transform lives. Together, we can make a meaningful impact and build a supportive community that celebrates every journey."
    ],
    button_text: "Become a Storyteller",
};

export const cn_storytellers: participate = {
    title: "讲述者",
    content: [
        "你有或激励人心或深刻温暖的成长故事想要分享吗？我们诚挚地邀请你加入我们，在微信公众号和小红书平台上分享你的故事，让你的经历能激励更多同辈前行。如果你愿意用声音讲述你的故事，我们也欢迎你成为Ripplet播客节目的分享嘉宾，一起点亮灯塔，为更广泛的听众照亮前行的方向。",
        "加入我们，共同编织一个能够引起共鸣、为他人赋能的故事集。我们一起在更广阔的空间泛起涟漪，带来影响，建立一个互相支持的社区，庆祝珍惜每一段人生旅程。",
    ],
    button_text: "成为讲述者",
};

export const en_new_facilitators: participate = {
    title: "Facilitators",
    content: [
        "Are you passionate about helping others and making a difference? We're looking for enthusiastic individuals to join our growing support team! If you’re an aspiring counselor or clinical social worker, this is a fantastic opportunity to get involved and make an impact on the Chinese-speaking community.",
        "For those interested in peer support, prior experience is a bonus, but it’s not required—we’ll provide comprehensive training for selected candidates in Summer 2025. This is your chance to develop valuable skills, connect with like-minded individuals, and contribute to a community dedicated to personal growth and empowerment.",
        "If you’re ready to embark on this rewarding journey, sign up using the link below, and we'll reach out to you soon!"
    ],
    button_text: "Become a Facilitator",
};

export const cn_new_facilitators: participate = {
    title: "支持者",
    content: [
        "我们正在寻找对心理行业充满热情的朋辈支持者加入我们的团队！如果你是未来的心理咨询师或临床社会工作者，我们非常欢迎你在项目早期阶段参与进来。",
        "我们也欢迎对朋辈支持感兴趣的朋友们报名，如果您过去有朋辈支持的经验，那么这会成为您的加分项，但这不是申请的必要条件，我们会在2025年夏季为入选的候选人提供培训。",
        "如果你感兴趣，请戳以下的链接报名，我们会尽快与您联系。",
    ],
    button_text: "成为支持者",
};