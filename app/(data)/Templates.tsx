export default [
  {
    name: "Blog Title Generator",
    desc: "An AI-powered tool that generates compelling blog titles based on your blog’s niche and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Generate 5 engaging blog title ideas in bullet format based on the provided niche and outline. Format the output using rich text editor styling.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Blog Outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content Generator",
    desc: "Create full-length blog posts effortlessly. This AI tool transforms your topic and outline into structured, engaging blog content—ready for publishing.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate a detailed blog post based on the given topic and outline. Return the output in rich text editor format with proper headings and paragraphs.",
    form: [
      {
        label: "Blog Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Blog Outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Instantly generate 5 attention-grabbing blog topic ideas tailored to your niche. Perfect for brainstorming or overcoming writer’s block.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate 5 creative blog topic ideas in bullet points only (no descriptions), based on the given niche. Format output for rich text editor.",
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Titles",
    desc: "Generate high-ranking, SEO-optimized video titles designed to attract clicks and boost your video visibility. Ideal for creators aiming for performance.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Generate 5 high-ranking, SEO-optimized YouTube video titles in bullet points only, based on the provided keywords and outline. Return output in HTML tag format.",
    form: [
      {
        label: "Enter your video keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Video Outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    desc: "Write compelling, emoji-enhanced video descriptions in just a few lines. Perfect for grabbing attention and improving SEO.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate a 4–5 line YouTube video description with emojis, based on the provided topic and outline. Return output in rich text editor format.",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Video Outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Tags Generator",
    desc: "Create a set of 10 effective YouTube tags that improve video discoverability and SEO ranking, based on your content.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 relevant YouTube tags in bullet points based on the provided title and optional outline. Format output for rich text editor.",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Video Outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism-Free)",
    desc: "Effortlessly rewrite articles or blog posts to ensure originality and bypass AI and plagiarism detectors — ideal for content creators, bloggers, and students.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the given article in a completely original way, ensuring it is plagiarism-free and undetectable by AI tools. Format the result for a rich text editor.",
    form: [
      {
        label: "Paste the article or content you want to rewrite",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Enhance your writing by eliminating grammatical errors, improving clarity, and suggesting professional tone and vocabulary for polished content.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Improve the provided text by correcting grammatical errors, enhancing clarity, and rewriting it in a professional tone. Format the result for a rich text editor.",
    form: [
      {
        label: "Enter the text you'd like to improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Bring your content to life by automatically adding relevant emojis based on the context. Perfect for social media, captions, or fun messaging.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Content Enhancer",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Rewrite the given text by intelligently adding relevant emojis based on context. Format the output for a rich text editor.",
    form: [
      {
        label: "Enter your text to enhance with emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Generate engaging and trendy Instagram post captions based on keywords. Perfect for creators, brands, and influencers looking to boost engagement.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "Instagram Tools",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 creative and engaging Instagram post captions based on the given keywords. Return the result in rich text editor format.",
    form: [
      {
        label: "Enter keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Automatically generate a set of relevant and trending hashtags for your Instagram posts based on the provided keywords.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "Instagram Tools",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 high-performing Instagram hashtags based on the given keywords. Return the result in rich text editor format.",
    form: [
      {
        label: "Enter keywords for your Instagram hashtags",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post & Reel Ideas",
    desc: "Get 5–10 creative and trending ideas for Instagram posts or reels based on your niche. Stay ahead of the curve with fresh content concepts.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "Instagram Tools",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5–10 unique Instagram post or reel ideas based on the given niche or keywords. Include current trends. Return in rich text editor format.",
    form: [
      {
        label: "Enter keywords or niche for content ideas",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Checker",
    desc: "Check and correct grammar in your English text instantly. Ideal for improving writing clarity, accuracy, and tone.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "Writing Assistant",
    slug: "english-grammar-checker",
    aiPrompt:
      "Correct grammatical errors in the given text and rewrite it professionally. Return the result in rich text editor format.",
    form: [
      {
        label: "Enter text to check and improve grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "Generate clean, functional code in any programming language based on your requirements.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding Tools",
    slug: "write-code",
    aiPrompt:
      "Based on the user's description, generate code in the specified programming language. Output the result in a rich text editor code block.",
    form: [
      {
        label: "Describe the code you want (include language)",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Understand complex code with line-by-line explanations in plain English.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding Tools",
    slug: "explain-code",
    aiPrompt:
      "Analyze the given code and explain it line by line in clear, human-readable format. Return output as a rich text editor code block.",
    form: [
      {
        label: "Paste the code you'd like explained",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Identify bugs in your code and receive clear suggestions and fixes to resolve them.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding Tools",
    slug: "code-bug-detector",
    aiPrompt:
      "Analyze the provided code for bugs, errors, or issues. Suggest improvements and return the fixed version in a rich text editor code block.",
    form: [
      {
        label: "Paste the code to check for bugs",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Create catchy, brand-aligned taglines that connect with your audience instantly.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing Tools",
    slug: "tagline-generator",
    aiPrompt:
      "Generate 5–10 catchy and creative taglines for the product based on the name and description. Output the result in rich text editor format.",
    form: [
      {
        label: "Product or Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What are you selling / promoting?",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Generate SEO-optimized and compelling product descriptions that drive conversions for your e-commerce listings.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing Tools",
    slug: "product-description",
    aiPrompt:
      "Write a short, keyword-rich, and persuasive product description based on the product name and details. Output the result in rich text editor format.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details / Features",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
