// Type
export type navbar = {
    label: string,
    button: boolean,
}

export type ripplet_introduction = {
    highlight?: string,
    bold?: string,
    normal: string,
}

export type about_us = {
    title: string,
    content: string[],
}

export type participate = {
    title: string,
    content: string[],
    button_text: string,
}

// English Content
export const en_navbar: navbar[] = [
    {
        label: "Participate",
        button: false
    },
    {
        label: "About",
        button: false
    },
    {
        label: "Join the beta",
        button: true
    },
]

export const en_ripplet_introduction: ripplet_introduction[] = [
    {
        highlight: "Embrace",
        normal: "your feelings",
    },
    {
        highlight: "Vocalize",
        normal: "your journey",
    },
    {
        highlight: "Support",
        normal: "your community"
    }
]

export const en_about_us: about_us = {
    title: "About Us",
    content: [
        "Ripplet is a community-initiated wellness platform for Chinese speakers across the globe, in relevance to our own cultures and beliefs.", 
        "We understand the mental health needs and challenges for people with Asian backgrounds, and we are dedicated to raising self-care awareness by providing a safe space to express personal feelings, share self-care journeys, and receive culturally aware emotional support.",
        "Founded in 2023, we have an extensive network of survivors and peer support specialists to provide timely help on your wellness journey."
    ]
}

export const en_participate: participate[] = [
    {
        title: "Participant",
        content: [
            "We are looking for participants aged 18 to 25 to participate in our small-sized peer support groups.", 
            "The cohort will happen every Saturday or Sunday for 5 weeks, in the form of 5 support group meetings with a total of 5 themes.",
            "Participants could choose to participate in one or more topics of interest."
        ],
        button_text: "Join as participant"
    },
    {
        title: "Facilitator",
        content: [
            "We are looking for peer support specialists and future practitioners to join our supporter team.",
            "While we prioritize those with experiences, it is not a requirement as training will be provided if you are selected to participate in our program.",
            "We will reach out to you at our earliest convenience after you sign up.",
        ],
        button_text: "Join as facilitator"
    },
]

// Chinese Content
export const cn_navbar: navbar[] = [
    {
        label: "加入",
        button: false
    },
    {
        label: "关于我们",
        button: false
    },
    {
        label: "加入试用",
        button: true
    },
]

export const cn_ripplet_introduction: ripplet_introduction = {
    bold: "认知，分享，互助",
    normal: "Ripplet让你在自我关怀的路上不再孤单"
}

export const cn_about_us: about_us = {
    title: "关于我们",
    content: [
        "Ripplet 为年轻华人群体提供一个安全的空间，让大家在自我成长的路上可以获得温暖的支持和陪伴。",
        "Ripplet成立于2023年，旨在为全球年轻华人提供实时且有效的情感支持。我们致力于构建一个安全的环境，使人们能够没有负担地表达感受，分享自我成长的经历，并在这个过程中找到共鸣和回应。我们希望在华人心理专家和朋辈的陪伴下，大家能在被深度共情的过程中养成关爱自我的习惯，并最终基于强烈的自我认同感去在现实生活中建立深度的社交关系。",
    ]
}

export const cn_participate: participate[] = [
    {
        title: "小涟漪",
        content: [
            "我们正在寻找18-25岁的华人加入“涟漪计划”。活动将在周末进行，为期5周。参与者可以在5个主题中，选择一场或多场感兴趣的活动参加。我们的小组会将由拥有同辈支持经验的心理从业人员带领，大家可以从个人经历出发，在讨论中找寻共鸣。",
        ],
        button_text: "成为参与者"
    },
    {
        title: "小水滴",
        content: [
            "与此同时，我们也在招募正在受训/持证的心理咨询师，社会工作者和心理学家。无论你有没有朋辈支持的经验，如果你对我们的项目感兴趣的话，都欢迎你在这里上传简历。我们之后会联系你提供进一步的朋辈支持者培训。",
        ],
        button_text: "成为激励者"
    },
]


