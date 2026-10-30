// Auto-generated verified data from live website and archive discovery

export interface MediaItem {
  id: string;
  url: string;
  kind: 'image' | 'video';
  width: number;
  height: number;
  alt: string;
  caption?: string;
  focalX?: number;
  focalY?: number;
  color?: string;
  blurDataUrl?: string | null;
  durationS?: number | null;
  poster?: any;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  breed: string;
  gender: string;
  genderLabel: string;
  age: string;
  colour?: string;
  description?: string;
  status: 'available' | 'gone';
  featured?: boolean;
  seoDescription?: string;
  cover: MediaItem;
  media: MediaItem[];
  origin: {
    slug: string;
    name: string;
  };
  breeds: Array<{
    slug: string;
    name: string;
  }>;
  [key: string]: any;
}

export interface GoneHomeTicket {
  slug: string;
  name: string;
  meta: string;
  alt: string;
  mediaUrl: string;
  blurDataUrl?: string;
  status: 'gone';
  [key: string]: any;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  [key: string]: any;
}

export interface HappyFamilyPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  focalX: number;
  focalY: number;
  color: string;
  blurDataUrl?: string;
  tag?: string;
  date?: string;
  [key: string]: any;
}

export const SITE_CONFIG = {
  name: 'TeddyPups U.A.E.',
  domain: 'https://puppy.instabizweb.com',
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description: 'Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.',
  phone: '+971 54 167 6733',
  phoneDisplay: '+971 54 167 6733',
  phoneClean: '971541676733',
  whatsappNumber: '971541676733',
  whatsappHref: "https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies.",
  email: 'teddypupsadmin@gmail.com',
  address: 'Downtown Dubai, United Arab Emirates',
  showroomAddress: 'Downtown Dubai, United Arab Emirates',
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/teddypups.worldwide/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@teddypupsuae' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567496944539' }
  ]
};

export const AVAILABLE_PUPPIES: Puppy[] = [
  {
    "id": "4218427a-dd65-4b09-a089-584b912aa7ab",
    "slug": "maltipoo-max-male",
    "name": "Max",
    "displayName": "Max",
    "breed": "Maltipoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "3 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "Z0ToauDx7Eve",
      "url": "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
      "kind": "image",
      "width": 607,
      "height": 700,
      "alt": "Max, male Maltipoo puppy",
      "caption": "",
      "focalX": 0.538,
      "focalY": 0.443,
      "color": "#785838",
      "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoOABAAA4BaJaACdADDh2BzkBgYAP7fiDE/p2cnGzv1iHeb8jE5aJgBJQmybF8YoVvvRHe4nUN9iSUxSGyKrEJHcsPXH+aABXyOu+rsgZDA2WKHZDyt4AAA",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "Z0ToauDx7Eve",
        "url": "/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
        "kind": "image",
        "width": 607,
        "height": 700,
        "alt": "Max, male Maltipoo puppy",
        "caption": "",
        "focalX": 0.538,
        "focalY": 0.443,
        "color": "#785838",
        "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoOABAAA4BaJaACdADDh2BzkBgYAP7fiDE/p2cnGzv1iHeb8jE5aJgBJQmybF8YoVvvRHe4nUN9iSUxSGyKrEJHcsPXH+aABXyOu+rsgZDA2WKHZDyt4AAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "jNYYlZcF2IuE",
        "url": "/media/jNYYlZcF2IuE/61af7a5e09/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67.mp4",
        "kind": "video",
        "width": 576,
        "height": 1024,
        "alt": "Video of Max, male Maltipoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 3.97,
        "poster": {
          "id": "RH7J577OfQ7f",
          "url": "/media/RH7J577OfQ7f/e776d07dbd/b942a5_a1fa75c7bf2f4d688ec0ce0344baef67f000.jpg",
          "kind": "image",
          "width": 576,
          "height": 1024,
          "alt": "Max, male Maltipoo puppy",
          "caption": "",
          "focalX": 0.571,
          "focalY": 0.446,
          "color": "#c8c8b8",
          "blurDataUrl": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoJABAAA4BaJQBOgBuDxFKkgeXAAP7tgskcW3xGg1yYBPMNLZOfswca2sezIeQ11k2zvdAQD3fa+RJKTuahpuQAAAA=",
          "durationS": null,
          "poster": null
        }
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      }
    ],
    "published": true
  },
  {
    "id": "0abcf3f5-0080-44c1-b1e1-2a2de24a3cf4",
    "slug": "korean-teacup-maltipoo-female",
    "name": "",
    "displayName": "Korean Teacup Maltipoo",
    "breed": "Korean Teacup Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "gAaGwoGej2g6",
      "url": "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Female Korean Teacup Maltipoo puppy",
      "caption": "",
      "focalX": 0.525,
      "focalY": 0.426,
      "color": "#e8e8e8",
      "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoMABAAA4BaJaACdAYu5bVY11T9AAD+5nqO0GWULDS1a5hjnq0jKw5izeyo9NmvN7/ipfbCw+eCT5E6hLvfDJ1k+CeWVpSTocdvqcxNmUTB8qElmu754sg5jwqCCjaQwVAAAA==",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "gAaGwoGej2g6",
        "url": "/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy",
        "caption": "",
        "focalX": 0.525,
        "focalY": 0.426,
        "color": "#e8e8e8",
        "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoMABAAA4BaJaACdAYu5bVY11T9AAD+5nqO0GWULDS1a5hjnq0jKw5izeyo9NmvN7/ipfbCw+eCT5E6hLvfDJ1k+CeWVpSTocdvqcxNmUTB8qElmu754sg5jwqCCjaQwVAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "lrYgKCzauGW9",
        "url": "/media/lrYgKCzauGW9/862b350f1f/b942a5_dd7daf7c699444a8bfea0bb4dcf963a1-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 2",
        "caption": "",
        "focalX": 0.583,
        "focalY": 0.397,
        "color": "#e8e8e8",
        "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAACwAgCdASoMABAAA4BaJZgCdAYvNy4Rd0gX5FTw9AAA/qNlUaz01ujyo/lUROgIiVo8pDqch3E9RTgKpjMFEqtppAAwAXspbylGl42wu9u/uFpVsKZwHBhmXlRAWTGOpy2ybQyIBwAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "2HME5hUXxDGx",
        "url": "/media/2HME5hUXxDGx/c14e39aab8/b942a5_bab687bfd14446ed854f19e1550eb266-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 3",
        "caption": "",
        "focalX": 0.454,
        "focalY": 0.43,
        "color": "#e8e8e8",
        "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQAgCdASoMABAAA4BaJaACdAEf2vvN7tCAAP6I3rU/1uQQiNJOK7p2P6r4cT8h4hmjc4bfALMcK6903VGLS6d7jrEjy1Re9ThFB+HvZCYPTsju/f/aiW+6IHlPRRk0kudsQRwBOj/QAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "_I7jTQ-C-Dh5",
        "url": "/media/_I7jTQ-C-Dh5/b09aa1a0f5/b942a5_830ab138aef84b82b3db7b48185ee50c-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 4",
        "caption": "",
        "focalX": 0.326,
        "focalY": 0.554,
        "color": "#e8f8f8",
        "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQAgCdASoMABAAA4BaJYgCdAYv/dCF8dRFtSAAzj5baQKP79Iv9Hfs4drqM0yHM3dQ/a+xtku0bdxSCIMBCOS11m0+A3V84JCUFHn4TLWt0hRaDCm9nHywC87oXSqzW2fslxUbNtyW1ivw0uVE6TPiK4AAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "kutyfJpoJ-DA",
        "url": "/media/kutyfJpoJ-DA/ca1aa390f9/b942a5_71048e5af78a49e4b6e412bee89631e2-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 5",
        "caption": "",
        "focalX": 0.537,
        "focalY": 0.457,
        "color": "#686868",
        "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoMABAAA4BaJaACdAYwTqcP7AAA8plr4FCCJ4GSBQAK5zs6pitul7cZO79dLpatbp5rzxIZ/fo28v8OWbCDQ2pN6vqGtDHz22v7hi6sqldQt/wfXKlJFQAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "NCtufeu82GJy",
        "url": "/media/NCtufeu82GJy/0cb53c797a/b942a5_ebec2dc631bf4872aeb94a01c0f12dd7-mv2.jpg",
        "kind": "image",
        "width": 1044,
        "height": 1280,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 6",
        "caption": "",
        "focalX": 0.577,
        "focalY": 0.531,
        "color": "#e8e8e8",
        "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQAgCdASoNABAAA4BaJZgCdAYwna4swVrFvvAA3lCi5dFPZzM3Hx4f8Gvsvbrz2iXZ40xAonDzKFhwXFfp/m32oanBzTZnSrhcQx+gGbGHL8WRW3HYXh+FVOzZNUgRurg6NOSbESSnOI4ANH4AAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "fQuTnvGZbJAa",
        "url": "/media/fQuTnvGZbJAa/86ed3161c6/b942a5_5d0c26e331114666b05aeb4fca8cd3f1-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 7",
        "caption": "",
        "focalX": 0.513,
        "focalY": 0.449,
        "color": "#e8e8e8",
        "blurDataUrl": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAQCdASoMABAAA4BaJQBdgBtrDjjwAPu7g2QBfJAkYVN50jbOjJn7DNxbg+NUgAwT+3Fz+9luvanIVzYOMsU5qF0m1o9KdvLgEEspNQbnGsAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "ds4-88xZCxr-",
        "url": "/media/ds4-88xZCxr-/8317b998ec/b942a5_b9aafc7b5d0040e4819b526de9f4c1e2-mv2.jpg",
        "kind": "image",
        "width": 1144,
        "height": 1280,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 8",
        "caption": "",
        "focalX": 0.513,
        "focalY": 0.423,
        "color": "#d8d8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABQAgCdASoOABAAA4BaJZgC7AEQOA0rPAry3UgA/tzpwiE+/mTxDqBy+Kt9z70sBrQOa/Dnfm6HegdTmgV6H2yI/PMbzBP9HFmDMivgECbS3QVyA3a6g2OL9bq7E9n/4qAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "vdAI8reODuzV",
        "url": "/media/vdAI8reODuzV/51cc01057b/b942a5_27cb35500f7b4c53b3e379324de49ba7-mv2.jpg",
        "kind": "image",
        "width": 1020,
        "height": 1280,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 9",
        "caption": "",
        "focalX": 0.537,
        "focalY": 0.406,
        "color": "#f8f8f8",
        "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABQAgCdASoNABAAA4BaJagCdAYsjm+XtpTgm3AA4BpOJw1uGB51OSalffnyGfistDOjNyl89jxL61Xw/e3Gwh57FJUIFePYCvKnAXTXsbGjsg72qfCbhCp/JgHGagxvik8uakyJYAuXIuoAcPytkAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "3brH1qwkxHa9",
        "url": "/media/3brH1qwkxHa9/5f4c527879/b942a5_4b29b9e240d145ce8673732fa58dc7ec-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Korean Teacup Maltipoo puppy, photo 10",
        "caption": "",
        "focalX": 0.508,
        "focalY": 0.525,
        "color": "#b8b8b8",
        "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACQAgCdASoMABAAA4BaJbACdH8AF8hr0CyOI+0NUAD+68EEMluiKBVM2gmr2ztB+OR8lv2D6n3J6dAUhERxWmvKAJcbYHUOPMUqKvE3dktX4n43/fOmtHEbZAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "sfXWPM3b8qVt",
        "url": "/media/sfXWPM3b8qVt/5b2a08dab3/b942a5_fc2a6555d51b4e65b8ad229592c3755b.mp4",
        "kind": "video",
        "width": 352,
        "height": 400,
        "alt": "Video of female Korean Teacup Maltipoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 15.034,
        "poster": {
          "id": "VEmjKw7D8k2w",
          "url": "/media/VEmjKw7D8k2w/44fc2c4d8f/b942a5_fc2a6555d51b4e65b8ad229592c3755bf002.jpg",
          "kind": "image",
          "width": 352,
          "height": 400,
          "alt": "Female Korean Teacup Maltipoo puppy",
          "caption": "",
          "focalX": 0.606,
          "focalY": 0.515,
          "color": "#e8e8e8",
          "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoOABAAA4BaJZgCdAEVLk49oEPhAAD+x3dr++l5zPdS3LP0p/xZ8/HcyUFJZeXURkZM/qXJHReRhnlzWixJIUAsnUOycB6+RSdjj90rjS4l1HI0tZOjca5IMkQAAA==",
          "durationS": null,
          "poster": null
        }
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [
      {
        "slug": "korean-teacup",
        "name": "Korean Teacup"
      }
    ],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      }
    ],
    "published": true
  },
  {
    "id": "c5d2cf3c-51e8-4ecf-ac94-97ef8fceb6ec",
    "slug": "korean-teacup-poodle-female",
    "name": "",
    "displayName": "Korean Teacup Poodle",
    "breed": "Korean Teacup Poodle",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "xeMJCapr5vcU",
      "url": "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
      "kind": "image",
      "width": 960,
      "height": 1280,
      "alt": "Female Korean Teacup Poodle puppy",
      "caption": "",
      "focalX": 0.545,
      "focalY": 0.457,
      "color": "#f8d8b8",
      "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwAgCdASoMABAAA4BaJbACdAYulbFzrEIxAAD4Q9LP3soivyZYNkZFnpwuvb2D32sfZUooLvFM+6bpuXM+SrZnUXl2ANT8ifxJC9H7bXkCGEdRNt07Z0Gf7HBU/t7Z8NnzPuk+klU6Qpgpzgh32yLU8AA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "xeMJCapr5vcU",
        "url": "/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Poodle puppy",
        "caption": "",
        "focalX": 0.545,
        "focalY": 0.457,
        "color": "#f8d8b8",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwAgCdASoMABAAA4BaJbACdAYulbFzrEIxAAD4Q9LP3soivyZYNkZFnpwuvb2D32sfZUooLvFM+6bpuXM+SrZnUXl2ANT8ifxJC9H7bXkCGEdRNt07Z0Gf7HBU/t7Z8NnzPuk+klU6Qpgpzgh32yLU8AA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "GcThnLZ1o_XO",
        "url": "/media/GcThnLZ1o_XO/f28ac11602/b942a5_e172674fef9e426eaff0e73a7e4eba77-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Poodle puppy, photo 2",
        "caption": "",
        "focalX": 0.548,
        "focalY": 0.429,
        "color": "#f8d8a8",
        "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAwAgCdASoMABAAA4BaJbACdAYtBZvIhN2XQAD4Q8zP+ja2UYr1hJoi3lRn9CV9rlz/X9Bo/tq5I+OQko3Lqt8Evn5Optc3IWmfqySuQkmwWf6QvhFbXMPrOQBDPzyfb2z7btrHZEBxfJFTUM3Asv0mBWb7gAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "-GPU8k3WeJq7",
        "url": "/media/-GPU8k3WeJq7/59ae864abe/b942a5_677a4998fefe4388b8c5f79d74129b88-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Poodle puppy, photo 3",
        "caption": "",
        "focalX": 0.572,
        "focalY": 0.386,
        "color": "#f8d8b8",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwAgCdASoMABAAA4BaJbACdAEQaGt7B0DboAD2sUWBQRIegkSjlvYxXQMeK5x/dIvBDfysPDQ+WSK4qcZoYX/7J91UbANq6nrGE/nrHrijs6WIRELERD3MtKkvxwrI3BcAgDjhsnjcSygyN65EEOIAAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "9v0TRGsxL1vp",
        "url": "/media/9v0TRGsxL1vp/43b2f58f58/b942a5_e17e745414544ea1b578880ea1bf535b-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Poodle puppy, photo 4",
        "caption": "",
        "focalX": 0.559,
        "focalY": 0.424,
        "color": "#b89888",
        "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoMABAAA4BaJbACdADbhAFa7swAAP5rth9u0UCKP0cjkJ35jF/2F3/rYcJZSpx3H62jkammAkatKzODIH4RlV4ebniNjwy8EJjw0npyu3575PLWCTzW8t7uRsIAAA==",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [
      {
        "slug": "korean-teacup",
        "name": "Korean Teacup"
      }
    ],
    "breeds": [
      {
        "slug": "poodle",
        "name": "Poodle"
      }
    ],
    "published": true
  },
  {
    "id": "9cb7d6db-bf35-4e63-8e61-ca63e1925dbd",
    "slug": "maltipoo-cavapoo-male",
    "name": "",
    "displayName": "Maltipoo & Cavapoo",
    "breed": "Maltipoo & Cavapoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "3 months Maltipoo & 2 months Cavapoo",
    "colour": "",
    "description": "Maltipoo (Left) & Cavapoo (Right).",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "YQhey4j7uWvZ",
      "url": "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
      "kind": "image",
      "width": 960,
      "height": 1280,
      "alt": "Male Maltipoo & Cavapoo puppy",
      "caption": "",
      "focalX": 0.447,
      "focalY": 0.295,
      "color": "#b8a8a8",
      "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoMABAAA4BaJbACdAYtfzd3enfMAAD+3/WWuj75lp+ki5YusFrgepeZCJtNwM7IjTQuJ2r+L3i/rKdnUcnOGA6xG4vN5DAWdOHeB/N5EbjFNHJrpwhNNt6E+BPz4m0Tm3PExJSTg82wAA==",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "YQhey4j7uWvZ",
        "url": "/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Male Maltipoo & Cavapoo puppy",
        "caption": "",
        "focalX": 0.447,
        "focalY": 0.295,
        "color": "#b8a8a8",
        "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoMABAAA4BaJbACdAYtfzd3enfMAAD+3/WWuj75lp+ki5YusFrgepeZCJtNwM7IjTQuJ2r+L3i/rKdnUcnOGA6xG4vN5DAWdOHeB/N5EbjFNHJrpwhNNt6E+BPz4m0Tm3PExJSTg82wAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "jeaf0UcmFDSq",
        "url": "/media/jeaf0UcmFDSq/17b98c71ac/b942a5_244840afa15e4b008149736d5b894256-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Male Maltipoo & Cavapoo puppy, photo 2",
        "caption": "",
        "focalX": 0.443,
        "focalY": 0.315,
        "color": "#b8a8a8",
        "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoMABAAA4BaJbACdAYwdzV1kMesAP7nfO9hA34DK+sgN89iDvkq5N1Ezi2x7NrTAHO8B4Ux2r+2U7PzEGhl3UUH0WxP7js5tDgwoV/YiESkXfH9qPrGYKiObAhpklWT1uIwcAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "_cJaO-ryO6ev",
        "url": "/media/_cJaO-ryO6ev/af9e004679/b942a5_93358f1b7c434434b226b19e9ee0705b.mp4",
        "kind": "video",
        "width": 478,
        "height": 850,
        "alt": "Video of male Maltipoo & Cavapoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 13.383,
        "poster": {
          "id": "czRyKKk8Lm5N",
          "url": "/media/czRyKKk8Lm5N/6356959786/b942a5_93358f1b7c434434b226b19e9ee0705bf002.jpg",
          "kind": "image",
          "width": 478,
          "height": 850,
          "alt": "Male Maltipoo & Cavapoo puppy",
          "caption": "",
          "focalX": 0.428,
          "focalY": 0.313,
          "color": "#a89888",
          "blurDataUrl": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoJABAAA4BaJQBOgBuOv0auAAD+xvPVsMNenWhv3X0ad1M6jtGoI8fcLZuGuRM3gkfvAYxEsFPzT2uFegiyMXwdXepFrHSYJ935DkAA",
          "durationS": null,
          "poster": null
        }
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      },
      {
        "slug": "cavapoo",
        "name": "Cavapoo"
      }
    ],
    "published": true
  },
  {
    "id": "b39adb3f-eace-45af-a2e8-425de01ffc50",
    "slug": "toy-poodle-male-female",
    "name": "",
    "displayName": "Toy Poodle",
    "breed": "Toy Poodle",
    "gender": "male-female",
    "genderLabel": "Boy & girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "vMu0BPvkAZ-j",
      "url": "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
      "kind": "image",
      "width": 960,
      "height": 1280,
      "alt": "Toy Poodle puppy",
      "caption": "",
      "focalX": 0.654,
      "focalY": 0.447,
      "color": "#c8c8c8",
      "blurDataUrl": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMABAAA4BaJQBOgCHenFOCtQAA/u/P8GezJuelbXAGyqQluq8wMO7tl+W5HKJEe30ytlMk1SBL6hGk8YDFeiOm1AA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "vMu0BPvkAZ-j",
        "url": "/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Toy Poodle puppy",
        "caption": "",
        "focalX": 0.654,
        "focalY": 0.447,
        "color": "#c8c8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoMABAAA4BaJQBOgCHenFOCtQAA/u/P8GezJuelbXAGyqQluq8wMO7tl+W5HKJEe30ytlMk1SBL6hGk8YDFeiOm1AA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "wi6_RA1P4tyP",
        "url": "/media/wi6_RA1P4tyP/770eee919a/b942a5_2a0eeb7824e648a7812a4ba0ab504986-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Toy Poodle puppy, photo 2",
        "caption": "",
        "focalX": 0.431,
        "focalY": 0.408,
        "color": "#b8b8b8",
        "blurDataUrl": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQAgCdASoMABAAA4BaJYwCdH8AFcFBs5r2AP7iep75daI6RqS+agvqkX+lz1qVu8W5VAdlDEJtimc5AVnsY1sSEK8ghZiroJUbElAebPLAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "Yip9Os6wu5UL",
        "url": "/media/Yip9Os6wu5UL/9031f811cb/b942a5_ae972de107eb4d9d9cfa33cb26845beb-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Toy Poodle puppy, photo 3",
        "caption": "",
        "focalX": 0.455,
        "focalY": 0.329,
        "color": "#b8b8b8",
        "blurDataUrl": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAwAgCdASoMABAAA4BaJYwCdB2gAdyq71mAAAD+1ifrWDOYktrUV5ltpwcbQ/avQTFAiQ+uUDm2Y5e6yCF1PExyl4HtLjFnACAAAA==",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "poodle",
        "name": "Poodle"
      }
    ],
    "published": true
  },
  {
    "id": "027d7333-a8b2-49de-9bbc-9a47af88ebac",
    "slug": "maltipoo-female-2",
    "name": "",
    "displayName": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "3 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "3WJNmn6VVgVu",
      "url": "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
      "kind": "image",
      "width": 960,
      "height": 1280,
      "alt": "Female Maltipoo puppy",
      "caption": "",
      "focalX": 0.646,
      "focalY": 0.423,
      "color": "#080808",
      "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABwAgCdASoMABAAA4BaJagCdAYuvk0sb6K3lIYAAP7m2nW2E3DgxRs4uBzMB4qNQ69vNSEypPmR/pmbhYDbBKuvQHR9tlybU1A7qkO4dzVdz5AJhiv1NXIRNGu5hAAA",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "3WJNmn6VVgVu",
        "url": "/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Maltipoo puppy",
        "caption": "",
        "focalX": 0.646,
        "focalY": 0.423,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABwAgCdASoMABAAA4BaJagCdAYuvk0sb6K3lIYAAP7m2nW2E3DgxRs4uBzMB4qNQ69vNSEypPmR/pmbhYDbBKuvQHR9tlybU1A7qkO4dzVdz5AJhiv1NXIRNGu5hAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "s4vjs4fDhIH5",
        "url": "/media/s4vjs4fDhIH5/13bc63e2d9/b942a5_814fc9ca21e943149ca1b73af08c0d50-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Maltipoo puppy, photo 2",
        "caption": "",
        "focalX": 0.658,
        "focalY": 0.394,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAABQAgCdASoMABAAA4BaJaACdH8AFb2K78KYz4AA/uoQl5H49ACayf8GqNhpRPIIotJDy46ieqnShol65N32DABbdT1gx8sdA/DrA+Wscoi60EuQ02rcpsAfY2FAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "P339nL9SBx1E",
        "url": "/media/P339nL9SBx1E/68f8b9aa08/b942a5_f4f6b9eaf3fa434d84e9011b104a2f2e-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Maltipoo puppy, photo 3",
        "caption": "",
        "focalX": 0.611,
        "focalY": 0.549,
        "color": "#080818",
        "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoMABAAA4BaJQBOgBupQrYYbEAAAP7CFjecVT2kM2OWfJXtq6Q6qN1RFB8bjFiDlae7xu1Z5cPLQ8KjTsH8BNA3qeaJcr92XC6TNqrF2z8xsLVXPckXzb9bSSIiS1jrAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "Bba5vIUEEoRl",
        "url": "/media/Bba5vIUEEoRl/b9cb795228/b942a5_2cea5a50b30b4e6d81ef2b71a4455d04-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Maltipoo puppy, photo 4",
        "caption": "",
        "focalX": 0.688,
        "focalY": 0.466,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoMABAAA4BaJagCdAYu5bagWAJ9gAD+rWjfaKic/tflp09WIjbx5qvTzE0+vv3dhnCzZGn7jg3u7cbhpmcH+7oJMG+zLGTi69SLhQkYA6yS5SkknsW8bkJG+nwAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "Q6DRbgSnEgtV",
        "url": "/media/Q6DRbgSnEgtV/f069a77a72/b942a5_867cc819aad8444bbdc7ef58bccc22e3.mp4",
        "kind": "video",
        "width": 478,
        "height": 850,
        "alt": "Video of female Maltipoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 24.24,
        "poster": {
          "id": "e9Tc1KFwflMo",
          "url": "/media/e9Tc1KFwflMo/bf15ff5eaf/b942a5_867cc819aad8444bbdc7ef58bccc22e3f000.jpg",
          "kind": "image",
          "width": 478,
          "height": 850,
          "alt": "Female Maltipoo puppy",
          "caption": "",
          "focalX": 0.789,
          "focalY": 0.366,
          "color": "#b8a878",
          "blurDataUrl": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoJABAAA4BaJYgCdADzYnuAAP7p+lOMF9XgRrLZ1+KDGPcPINmBzketbrxGo2UlQoCMEBQDykOjwOBSPebqFwAA",
          "durationS": null,
          "poster": null
        }
      },
      {
        "id": "F0GAEsYGQHAH",
        "url": "/media/F0GAEsYGQHAH/d28cb39828/b942a5_409c00762732451a9c914fd605f6427b.mp4",
        "kind": "video",
        "width": 576,
        "height": 1024,
        "alt": "Video of female Maltipoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 39.41,
        "poster": {
          "id": "sE8ic09hv3OL",
          "url": "/media/sE8ic09hv3OL/df0013d33c/b942a5_409c00762732451a9c914fd605f6427bf000.jpg",
          "kind": "image",
          "width": 576,
          "height": 1024,
          "alt": "Female Maltipoo puppy",
          "caption": "",
          "focalX": 0.392,
          "focalY": 0.268,
          "color": "#b8a898",
          "blurDataUrl": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoJABAAA4BaJZACdIExE6CM4AD+x2oFr2AteypVHxLkDE5ruYmr/VHZP/rwNiXswAM/ibAFwm6DTO6Y4FgfxCQUDuOeLa2SgrAAAA==",
          "durationS": null,
          "poster": null
        }
      },
      {
        "id": "RC96jX2CHK7g",
        "url": "/media/RC96jX2CHK7g/a33aea35af/b942a5_4363a677510a4d298769f98ad3d42742.mp4",
        "kind": "video",
        "width": 576,
        "height": 1024,
        "alt": "Video of female Maltipoo puppy",
        "caption": "",
        "focalX": 0.5,
        "focalY": 0.42,
        "color": "#f2be6b",
        "blurDataUrl": null,
        "durationS": 40.934,
        "poster": {
          "id": "Wxd28D1k9rc-",
          "url": "/media/Wxd28D1k9rc-/f1091062ce/b942a5_4363a677510a4d298769f98ad3d42742f000.jpg",
          "kind": "image",
          "width": 576,
          "height": 1024,
          "alt": "Female Maltipoo puppy",
          "caption": "",
          "focalX": 0.435,
          "focalY": 0.379,
          "color": "#181828",
          "blurDataUrl": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAABQAgCdASoJABAAA4BaJZACdAEfh1eUD6mppAAA/cTIvEsio4hRMM6XKWVvSG/5djPpWGq+QmolZxCT4AL2ySYs1eDjzewoVFGu0gxj3+X2gXPTCyAAAA==",
          "durationS": null,
          "poster": null
        }
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      }
    ],
    "published": true
  },
  {
    "id": "ec3a42bf-bd62-46ba-962d-8f94f09715c5",
    "slug": "pomeranian-female",
    "name": "",
    "displayName": "Pomeranian",
    "breed": "Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "3 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "3yOfnmoyPooH",
      "url": "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
      "kind": "image",
      "width": 720,
      "height": 1280,
      "alt": "Female Pomeranian puppy",
      "caption": "",
      "focalX": 0.403,
      "focalY": 0.443,
      "color": "#080808",
      "blurDataUrl": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoJABAAA4BaJQBOgBsjd1RAAP7yNFu+YEtpSceQZ33PyZ7KzmxvqdzTiDlKiH0X4tIqZJwvEf+wzWM7cWmxuoq10Hu8HuCAAAA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "3yOfnmoyPooH",
        "url": "/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
        "kind": "image",
        "width": 720,
        "height": 1280,
        "alt": "Female Pomeranian puppy",
        "caption": "",
        "focalX": 0.403,
        "focalY": 0.443,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoJABAAA4BaJQBOgBsjd1RAAP7yNFu+YEtpSceQZ33PyZ7KzmxvqdzTiDlKiH0X4tIqZJwvEf+wzWM7cWmxuoq10Hu8HuCAAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "-kKg81ORXQbR",
        "url": "/media/-kKg81ORXQbR/2df3e9d7fe/b942a5_04ffe4a8ebf2404fad62b654f5ffdf44-mv2.jpg",
        "kind": "image",
        "width": 720,
        "height": 1280,
        "alt": "Female Pomeranian puppy, photo 2",
        "caption": "",
        "focalX": 0.376,
        "focalY": 0.405,
        "color": "#b8a8a8",
        "blurDataUrl": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoJABAAA4BaJYwCdADcXkGjqlAA/vJwf2CAmN/polOoudEsh8rNt8py2J2Wq3AsHnUumSamMMkhGt2VPTCPEfi9cgIPSQAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "tWfepr0dPXso",
        "url": "/media/tWfepr0dPXso/6b8445f11e/b942a5_87c1bf878b9642b0abde73d40a4a672d-mv2.jpg",
        "kind": "image",
        "width": 720,
        "height": 1280,
        "alt": "Female Pomeranian puppy, photo 3",
        "caption": "",
        "focalX": 0.403,
        "focalY": 0.383,
        "color": "#c8c8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoJABAAA4BaJYwCdAEUUsTAHeyAAP7ifecp3rrsljsD5lKmM8yJTGHExkyCTe9HNYoEd/h9qFrxme/HP1TBcaiY8tBPosAA",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "pomeranian",
        "name": "Pomeranian"
      }
    ],
    "published": true
  },
  {
    "id": "e486e544-f1fd-48f9-8ba0-f556d7ee44e7",
    "slug": "copper-male",
    "name": "Copper",
    "displayName": "Copper",
    "breed": "Cavapoo",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "O-6w4FYqE10j",
      "url": "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
      "kind": "image",
      "width": 836,
      "height": 1280,
      "alt": "Copper, male Cavapoo puppy",
      "caption": "",
      "focalX": 0.43,
      "focalY": 0.505,
      "color": "#e8d8c8",
      "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoKABAAA4BaJbACdADMqojjOocAAP7PZYKA+Lu8lWU7z7yQUWO6xMkMk/OmshQ8mZA+f3Evp0OojmSqKnf21Ul3U75HVD+vAEFXGeTLuWPRnUH/DhavO7O6WL+rV4ghxAA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "O-6w4FYqE10j",
        "url": "/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg",
        "kind": "image",
        "width": 836,
        "height": 1280,
        "alt": "Copper, male Cavapoo puppy",
        "caption": "",
        "focalX": 0.43,
        "focalY": 0.505,
        "color": "#e8d8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoKABAAA4BaJbACdADMqojjOocAAP7PZYKA+Lu8lWU7z7yQUWO6xMkMk/OmshQ8mZA+f3Evp0OojmSqKnf21Ul3U75HVD+vAEFXGeTLuWPRnUH/DhavO7O6WL+rV4ghxAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "57IVFGZFRSJ1",
        "url": "/media/57IVFGZFRSJ1/70ec15d562/b942a5_2c13cdda0a174e33b22cf65063e1aa7f-mv2.jpg",
        "kind": "image",
        "width": 828,
        "height": 1280,
        "alt": "Copper, male Cavapoo puppy, photo 2",
        "caption": "",
        "focalX": 0.478,
        "focalY": 0.433,
        "color": "#e8c8a8",
        "blurDataUrl": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwAgCdASoKABAAA4BaJbACdADp9NKde7HLAAD5fFSq6k6DysMgeCG7K2NnZp2aXIJhUQa3Mva2CwJft3tR+n28ejBNn0dvKk8EW1MhAhzJt9NZUlZXX12LPfNytzfzPaOD+0L5Y8JhbkTkgAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "2stMgxztsgXb",
        "url": "/media/2stMgxztsgXb/8b643b4842/b942a5_ce135cde6ebe45abb75435a7ce7d6910-mv2.jpg",
        "kind": "image",
        "width": 904,
        "height": 1280,
        "alt": "Copper, male Cavapoo puppy, photo 3",
        "caption": "",
        "focalX": 0.501,
        "focalY": 0.417,
        "color": "#e8d8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoLABAAA4BaJbACdAEWPa7u0oXDAAD+zQgkhEL9UgBhef1zLU6bnrSKecjeYeoRSm3Pr82Rh+Xcb/4VIkMP7SzZyRITtuFBSaFyQQD2FTRBJWcytfr6Bcft8NrXnprgAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "objS5G36nXH0",
        "url": "/media/objS5G36nXH0/4d398662f6/b942a5_f29547489be747e597ed20c191e1f24c-mv2.jpg",
        "kind": "image",
        "width": 870,
        "height": 1280,
        "alt": "Copper, male Cavapoo puppy, photo 4",
        "caption": "",
        "focalX": 0.526,
        "focalY": 0.451,
        "color": "#e8d8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoLABAAA4BaJbACdAEeuywGbHl4AAD+wgkXH8ji7W0d12oOkjgnqi9c7H9PEmZz0MYowSMZ3zNUcPU/4LD3dIUQf9AjLmD5e4r5f5XVvXwRSYsjmYZs7h9dDSsIDBXj2CItbs2uxAAAAA==",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "cavapoo",
        "name": "Cavapoo"
      }
    ],
    "published": true
  },
  {
    "id": "d2d146b2-6454-4e05-967a-87f2ab02946d",
    "slug": "shitzu-female",
    "name": "",
    "displayName": "Shih Tzu",
    "breed": "Shih Tzu",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "qNrTCSrsYyzY",
      "url": "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Female Shih Tzu puppy",
      "caption": "",
      "focalX": 0.448,
      "focalY": 0.425,
      "color": "#383848",
      "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABQAgCdASoMABAAA4BaJYgCdAYtBqZoGcirboAA9r+jbrEhAwhPsoIvgbY33OnUHj+EOZlCqhDjhTrE+9DVdd/ginf3jvE8NvMxf5CNQ3U+twkNZIjq5CXVHlCovswbZGns2ZsLfOgNo3KaTV0/QAAA",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "qNrTCSrsYyzY",
        "url": "/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Shih Tzu puppy",
        "caption": "",
        "focalX": 0.448,
        "focalY": 0.425,
        "color": "#383848",
        "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAABQAgCdASoMABAAA4BaJYgCdAYtBqZoGcirboAA9r+jbrEhAwhPsoIvgbY33OnUHj+EOZlCqhDjhTrE+9DVdd/ginf3jvE8NvMxf5CNQ3U+twkNZIjq5CXVHlCovswbZGns2ZsLfOgNo3KaTV0/QAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "IiEprGOhv7PA",
        "url": "/media/IiEprGOhv7PA/bc83339b6d/b942a5_c5497befad4d4a70937e669e6c67bbb2-mv2.jpeg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Shih Tzu puppy, photo 2",
        "caption": "",
        "focalX": 0.526,
        "focalY": 0.403,
        "color": "#484858",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwAgCdASoMABAAA4BaJYwCdAYvNbY6satfAADif5qYvucVriLycVJUw6RR4NS68IJueIAu59Hz8gQCbPzyMJ6tF0htJE7XUzB4mcePdqGJwNrrscxKqSax1syFUXjF4g0uBJq0veMQcFl7DQHQiM2AAAA=",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "shih-tzu",
        "name": "Shih Tzu"
      }
    ],
    "published": true
  },
  {
    "id": "0fe92eee-1937-48e1-b48b-77292a6f25d8",
    "slug": "shitzu-male",
    "name": "",
    "displayName": "Shih Tzu",
    "breed": "Shih Tzu",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "crgs9ih6as_M",
      "url": "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Male Shih Tzu puppy",
      "caption": "",
      "focalX": 0.403,
      "focalY": 0.436,
      "color": "#787888",
      "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQAQCdASoMABAAA4BaJQAAQLNSR2l5IADK9yf+AzwQ9BQ8jb7oIfyEbZpGzu7BpNCWLXmL7uQ2XIFWGGhAb3C39Su82ZG8HdqZFgBIT6YkBca8xMy9wAWQNPMVkA2/wTG69soqIAA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "crgs9ih6as_M",
        "url": "/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Male Shih Tzu puppy",
        "caption": "",
        "focalX": 0.403,
        "focalY": 0.436,
        "color": "#787888",
        "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADQAQCdASoMABAAA4BaJQAAQLNSR2l5IADK9yf+AzwQ9BQ8jb7oIfyEbZpGzu7BpNCWLXmL7uQ2XIFWGGhAb3C39Su82ZG8HdqZFgBIT6YkBca8xMy9wAWQNPMVkA2/wTG69soqIAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "nGRgg9NQ0H_U",
        "url": "/media/nGRgg9NQ0H_U/cb555fde1b/b942a5_38d832caea1148af824ab378c45ea865-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Male Shih Tzu puppy, photo 2",
        "caption": "",
        "focalX": 0.468,
        "focalY": 0.584,
        "color": "#989898",
        "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADQAQCdASoMABAAA4BaJZAC7ADCi7diAAD8ygG4alOaVZco+OGe1AUCI55fY8xqfa4oxUZXvo7mwbNsGAlT/AztRaF0adjpAPpbEy4bkK4W0wgLcv/gnCRwLLcWUyAA",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "shih-tzu",
        "name": "Shih Tzu"
      }
    ],
    "published": true
  },
  {
    "id": "0deaea0d-1c0e-4e85-868b-3c7376358e03",
    "slug": "maltipoo-female-1",
    "name": "",
    "displayName": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2.5 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "wNm2_VIBEQvK",
      "url": "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Female Maltipoo puppy",
      "caption": "",
      "focalX": 0.475,
      "focalY": 0.505,
      "color": "#e8d8c8",
      "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABwAgCdASoMABAAA4BaJbACdAYuvwkVUSPQ+QYAAP7ohuzS5qIDPaKmcMlTXyd9Lev8DaKs8q6LU9/8AJClSRiV+XZfgdyco81756axiYDMVLe1cfLTyNgaiibRcnvOyJFIxWGE5GVOI+xP3trp8PogAAA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "wNm2_VIBEQvK",
        "url": "/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy",
        "caption": "",
        "focalX": 0.475,
        "focalY": 0.505,
        "color": "#e8d8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABwAgCdASoMABAAA4BaJbACdAYuvwkVUSPQ+QYAAP7ohuzS5qIDPaKmcMlTXyd9Lev8DaKs8q6LU9/8AJClSRiV+XZfgdyco81756axiYDMVLe1cfLTyNgaiibRcnvOyJFIxWGE5GVOI+xP3trp8PogAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "Zsg0P8hWNXeY",
        "url": "/media/Zsg0P8hWNXeY/888a9659ac/b942a5_1e2a534b212641c183efa8df90969da0-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 2",
        "caption": "",
        "focalX": 0.523,
        "focalY": 0.582,
        "color": "#e8d8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABwAgCdASoMABAAA4BaJagCdAYstkv/0ecR2qIAAP7YPPnVvMlu5SSU1bxFzBNCpFWa8GvjzCbVxScUTHS+LoGv2dnWAWshI3+Zd5Xd3XYMlHgqLyFEAdeZEvzqRQHTRYjFFBFF+bBzkJajAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "hvIVlpipXnjZ",
        "url": "/media/hvIVlpipXnjZ/7c954810e6/b942a5_9537342069974565827ab8ade1a52636-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 3",
        "caption": "",
        "focalX": 0.421,
        "focalY": 0.481,
        "color": "#e8e8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAwAgCdASoMABAAA4BaJbACdAYuRc6fYcxuwAD+4aoBCLeSmqeKrJiZVVHgRhIRbEfi1vUrlMTPbJn88SglEtfY0bA5MwCQhtTCTsMZYgpbu7129StU9un23EvYfCcb9v6Q5awfwFkI8IqNcNfFQAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "YhnrBy6ZwWks",
        "url": "/media/YhnrBy6ZwWks/1d241d42bc/b942a5_36c70cdc162d4d308ce2293077961c07-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 4",
        "caption": "",
        "focalX": 0.431,
        "focalY": 0.531,
        "color": "#e8e8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAADwAQCdASoMABAAA4BaJbACdAYsPEXXBoAA/uhPsoy75uREZ18jT4nVYD8JgAn00yVem04h+L503b+EbifRir0eb/HyRoyoO4WjNZ+MWWAgkSyiFm2DfuLyUPzSiBZeAAsk1AeJj0ae3AlHs9WOOwxTKgA=",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      }
    ],
    "published": true
  },
  {
    "id": "cbfa8ebd-7e0c-4818-b0ec-144ede4d3352",
    "slug": "maltipoo-female",
    "name": "",
    "displayName": "Maltipoo",
    "breed": "Maltipoo",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "lMhASnmIIVQ4",
      "url": "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Female Maltipoo puppy",
      "caption": "",
      "focalX": 0.569,
      "focalY": 0.492,
      "color": "#e8d8c8",
      "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoMABAAA4BaJagCdAYtpj8SXtcKAAD+653Voze04JdV9qv3vONq3OJeMnOKtPUufFf+xE52o/vxLp1jbGhiuHbFN2+v3SpYSJ9uAOvkfeXlIk3eSgY9R/Flt6Kx2GE5E45jgLU2vBAAAA==",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "lMhASnmIIVQ4",
        "url": "/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy",
        "caption": "",
        "focalX": 0.569,
        "focalY": 0.492,
        "color": "#e8d8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoMABAAA4BaJagCdAYtpj8SXtcKAAD+653Voze04JdV9qv3vONq3OJeMnOKtPUufFf+xE52o/vxLp1jbGhiuHbFN2+v3SpYSJ9uAOvkfeXlIk3eSgY9R/Flt6Kx2GE5E45jgLU2vBAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "_NpYIcbNGQC0",
        "url": "/media/_NpYIcbNGQC0/0dfcc90259/b942a5_34efe8b4c5c244fca7bb059e5b08891e-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 2",
        "caption": "",
        "focalX": 0.534,
        "focalY": 0.443,
        "color": "#e8d8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQAgCdASoMABAAA4BaJbACdAYt9bZyItlOLgAA/teTlvhlGN52IjNInh5PEZZ3tjXNLEQtKEGrE3iMKetzO/g0Fli3wvAomKLvv7MXmmSJhr8UpU1HFXaJlNGbwduSjGjqacJM+pLrfDrOf+xxFtPnbAAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "l--XKCkJac6g",
        "url": "/media/l--XKCkJac6g/9e60957bb7/b942a5_6b2183f855cc4881933923f255131b51-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 3",
        "caption": "",
        "focalX": 0.477,
        "focalY": 0.535,
        "color": "#f8e8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACQAgCdASoMABAAA4BaJbACdH8AgmzFBtuz3XaoAAD+yXXHiDFQhKTtb1PZfVhFjd80hqT+WJSE7mH8qNVTQ/Gx983o9e+PoEGoJKKNOctmA90PEH5JUxWBy48Xh+SKuXs4fYLf2izP1ZdpNrz/hs/yIOEFHs8GkAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "N1XdMhMnfw-A",
        "url": "/media/N1XdMhMnfw-A/6ba6cbb4d2/b942a5_d7eb4c4b58174a26976134a7db05da78-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Female Maltipoo puppy, photo 4",
        "caption": "",
        "focalX": 0.472,
        "focalY": 0.509,
        "color": "#f8e8c8",
        "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwAgCdASoMABAAA4BaJbACdAYsPuKhemj+MXkAAP6YX04WMuJvHJha/ELfey64vu4dP1TACluSFpxu7So5ek2I/KVAUeB7NGOYwuw65qa0TODqVc8mcmoyycbyk3HP4HrIqT2sPa4uaABcVDw3GZ/gMAAAAA==",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [],
    "breeds": [
      {
        "slug": "maltipoo",
        "name": "Maltipoo"
      }
    ],
    "published": true
  },
  {
    "id": "35d5e8bd-bebb-41c7-b0a9-256482edb3c8",
    "slug": "korean-teacup-pomeranian-1",
    "name": "",
    "displayName": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "EsAq2LSRvVCJ",
      "url": "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
      "kind": "image",
      "width": 960,
      "height": 1280,
      "alt": "Female Korean Teacup Pomeranian puppy",
      "caption": "",
      "focalX": 0.499,
      "focalY": 0.513,
      "color": "#d8d8d8",
      "blurDataUrl": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoMABAAA4BaJZQC7ADbpB6XHIAA/uxVzSDe/DtCzUnRPkZd9KmquF9qY0j77BtYejaM+fU0JZcXxWHjXMsUZCNMbAAAAA==",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "EsAq2LSRvVCJ",
        "url": "/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Pomeranian puppy",
        "caption": "",
        "focalX": 0.499,
        "focalY": 0.513,
        "color": "#d8d8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoMABAAA4BaJZQC7ADbpB6XHIAA/uxVzSDe/DtCzUnRPkZd9KmquF9qY0j77BtYejaM+fU0JZcXxWHjXMsUZCNMbAAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "NCYZMBazXOyI",
        "url": "/media/NCYZMBazXOyI/a67f6a1316/b942a5_4439600d2b084918be65f14abbd5a67b-mv2.jpg",
        "kind": "image",
        "width": 960,
        "height": 1280,
        "alt": "Female Korean Teacup Pomeranian puppy, photo 2",
        "caption": "",
        "focalX": 0.649,
        "focalY": 0.397,
        "color": "#d8d8d8",
        "blurDataUrl": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAgCdASoMABAAA4BaJZQCdAECpsIiVfe6AAD+8uJXZMITp3lQ+zhSNQyuf8msAIO90NUye+2sthCoSk6efz5GjT2TFROfeRNLsCAA",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [
      {
        "slug": "korean-teacup",
        "name": "Korean Teacup"
      }
    ],
    "breeds": [
      {
        "slug": "pomeranian",
        "name": "Pomeranian"
      }
    ],
    "published": true
  },
  {
    "id": "9fd5c518-a1ce-46d4-b9a4-8fb9714717f4",
    "slug": "korean-teacup-pomeranian",
    "name": "",
    "displayName": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "female",
    "genderLabel": "Girl",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "vzf7P8SPCZ-Q",
      "url": "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
      "kind": "image",
      "width": 1260,
      "height": 1598,
      "alt": "Female Korean Teacup Pomeranian puppy",
      "caption": "",
      "focalX": 0.499,
      "focalY": 0.486,
      "color": "#484848",
      "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABwAgCdASoNABAAA4BaJbACdH8Agry+Of6bOVcAAP5JUfqs6Guyokzl46/bHBWT3xNtMMqA5dSiIwp+3PWfxsdyRKol+RcxAUNcANQBgkdNgVXUsQOHz2xX413Qi7sjYliy6PQIXLdhscJAj7HP+J/SAAA=",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "vzf7P8SPCZ-Q",
        "url": "/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg",
        "kind": "image",
        "width": 1260,
        "height": 1598,
        "alt": "Female Korean Teacup Pomeranian puppy",
        "caption": "",
        "focalX": 0.499,
        "focalY": 0.486,
        "color": "#484848",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAABwAgCdASoNABAAA4BaJbACdH8Agry+Of6bOVcAAP5JUfqs6Guyokzl46/bHBWT3xNtMMqA5dSiIwp+3PWfxsdyRKol+RcxAUNcANQBgkdNgVXUsQOHz2xX413Qi7sjYliy6PQIXLdhscJAj7HP+J/SAAA=",
        "durationS": null,
        "poster": null
      },
      {
        "id": "us2RC0-t56MV",
        "url": "/media/us2RC0-t56MV/755ebb01c3/b942a5_ea69dc41b8bc4f46b52ce710bdbfd947-mv2.jpg",
        "kind": "image",
        "width": 1260,
        "height": 1540,
        "alt": "Female Korean Teacup Pomeranian puppy, photo 2",
        "caption": "",
        "focalX": 0.437,
        "focalY": 0.394,
        "color": "#484848",
        "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACQAgCdASoNABAAA4BaJbACdH8Agry6PbKAiEEEAAD+h79gpfBogiqaPK/HqEznFtuSCtu00oML9jQXjEfG6XlJk+N8dA5p8hAQVXN/NiGKOX7bOPR9/fGdaKA8SuIhdNlz0MZxDdhoEYGODM/5ItkAAAA=",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [
      {
        "slug": "korean-teacup",
        "name": "Korean Teacup"
      }
    ],
    "breeds": [
      {
        "slug": "pomeranian",
        "name": "Pomeranian"
      }
    ],
    "published": true
  },
  {
    "id": "e838ce49-59e0-4f3e-ab83-55cd2d98d2a2",
    "slug": "korean-teacup-pomeranian-male",
    "name": "",
    "displayName": "Korean Teacup Pomeranian",
    "breed": "Korean Teacup Pomeranian",
    "gender": "male",
    "genderLabel": "Boy",
    "age": "2 months",
    "colour": "",
    "description": "",
    "records": [],
    "status": "available",
    "featured": false,
    "seoDescription": "",
    "cover": {
      "id": "nZTGFv46hrZI",
      "url": "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
      "kind": "image",
      "width": 1200,
      "height": 1600,
      "alt": "Male Korean Teacup Pomeranian puppy",
      "caption": "",
      "focalX": 0.489,
      "focalY": 0.441,
      "color": "#080808",
      "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoMABAAA4BaJZAAD5MtVYFH++YgAP7PgwPGR41qFvLq2OifAZyvZukzNhKOrE1zybgTuvaUl/Q8Pa4U+xm6YeXoRgM90KI/SZtQ54K7/AyKWibTtJB9jYb/96v4U6qcKe+hmAAA",
      "durationS": null,
      "poster": null
    },
    "media": [
      {
        "id": "nZTGFv46hrZI",
        "url": "/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Male Korean Teacup Pomeranian puppy",
        "caption": "",
        "focalX": 0.489,
        "focalY": 0.441,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoMABAAA4BaJZAAD5MtVYFH++YgAP7PgwPGR41qFvLq2OifAZyvZukzNhKOrE1zybgTuvaUl/Q8Pa4U+xm6YeXoRgM90KI/SZtQ54K7/AyKWibTtJB9jYb/96v4U6qcKe+hmAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "vxOcjPUQjM2M",
        "url": "/media/vxOcjPUQjM2M/768e4b20eb/b942a5_86735dc871b942c8b823521cf5fcf31e-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Male Korean Teacup Pomeranian puppy, photo 2",
        "caption": "",
        "focalX": 0.434,
        "focalY": 0.443,
        "color": "#282818",
        "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoMABAAA4BaJaAC7AD0EtfJihuAAP6EvrIshsQGk8piQTOPLXu4er6IPUT5R2QbEWgDzf6XEeFPiDJfPozgdpyXFxdaT4D7JQ7osjci3ZbsH24MXu+8PXgnGQAAAA==",
        "durationS": null,
        "poster": null
      },
      {
        "id": "U_Qh2K9avqUE",
        "url": "/media/U_Qh2K9avqUE/3e9d7625dc/b942a5_f47099133ac14a69b1b1151c8f977a9a-mv2.jpg",
        "kind": "image",
        "width": 1200,
        "height": 1600,
        "alt": "Male Korean Teacup Pomeranian puppy, photo 3",
        "caption": "",
        "focalX": 0.451,
        "focalY": 0.446,
        "color": "#484838",
        "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAwAgCdASoMABAAA4BaJbAC7AEQXt4m0gNmQAD2rm2BuxSC6ho8u1v73k9rPL7B3e4TWdEKxHpylaI+SFo+lCfh3cbNh/AnPksK4BqV7f8iq2wJoSP7jz9XTIDkAAAA",
        "durationS": null,
        "poster": null
      },
      {
        "id": "b29CnSlKSaNP",
        "url": "/media/b29CnSlKSaNP/f3fd8ae60a/b942a5_287558eefc7e4386ad0c30344e6c4c62-mv2.jpg",
        "kind": "image",
        "width": 908,
        "height": 1600,
        "alt": "Male Korean Teacup Pomeranian puppy, photo 4",
        "caption": "",
        "focalX": 0.571,
        "focalY": 0.481,
        "color": "#080808",
        "blurDataUrl": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAQCdASoJABAAA4BaJYwCdADZvJrGYAD+5sWTzFn3zUDoTXdlMTQlFZ8rTyJU8bwUxmD5DzMIZLvxDXQiWUf9+RPVwcj+enxrvwDJ/X7OF2dnSbsVAAAA",
        "durationS": null,
        "poster": null
      }
    ],
    "origin": {
      "slug": "imported",
      "name": "Imported"
    },
    "collections": [
      {
        "slug": "korean-teacup",
        "name": "Korean Teacup"
      }
    ],
    "breeds": [
      {
        "slug": "pomeranian",
        "name": "Pomeranian"
      }
    ],
    "published": true
  }
];

export const GONE_HOME_TICKETS: GoneHomeTicket[] = [
  {
    "slug": "pomeranian-ace-boy",
    "name": "Ace",
    "meta": "Pomeranian, boy",
    "alt": "Ace, male Pomeranian puppy",
    "mediaUrl": "/media/mihUKGFCatU3/0461cca56e/27b888_bac41adfadc44dce846a1c3fd0cdb0de-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAkAA4BaJZgCdAD6lyxnE5gA/vUdfS3S9llTf7T8WWOlpR6zFXZaZPzkUnjJ7ITUwl1NqvAS7LI6ezVgAAAA",
    "status": "gone"
  },
  {
    "slug": "poodle-leo-male",
    "name": "Leo",
    "meta": "Poodle, boy",
    "alt": "Leo, male Poodle puppy",
    "mediaUrl": "/media/QgFG5s09n-ss/81af626d2d/27b888_5f9a7189bb21477d832047aae2040921-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAkAA4BaJZgCdAEXVjodqVdAAP7wtIqbFluAYdHhD47cmAqK76S/Bnqg9Z1MqGnh/niEYPv+MJYECz55I0qsZs3/xQUBrihy8vGOvdSWkDJgOq0AAA==",
    "status": "gone"
  },
  {
    "slug": "maltipoo-mia-girl",
    "name": "Mia",
    "meta": "Maltipoo, girl",
    "alt": "Sadie, female Maltipoo puppy, photo 4",
    "mediaUrl": "/media/4vu6_PGfL64H/537c367d85/27b888_747a4667fec640c69aad9bc045d61ac6-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAQCdASoQAAkAA4BaJbACdADiJCiW4AD+lpt5p9Duc4NMoGn9XK40o98AD/7wHRG88MZtD4aW3WHfS244vZPz6RB8j+03IlrB88jbfBszWzgQAAA=",
    "status": "gone"
  },
  {
    "slug": "maltipoo-sadie-girl",
    "name": "Sadie",
    "meta": "Maltipoo, girl",
    "alt": "Sadie, female Maltipoo puppy",
    "mediaUrl": "/media/159oT4F46uhk/b66c2be87f/27b888_ea6e7e0fcd43447d854657b6de98d4cb-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoQAAkAA4BaJbACdAYtzqhfulpWAAD+68DyKTC7PKvhvJL2N/+DD4Ufjbf+JtjVXhYpn1xzv8eIDJINbPOUJnSSy/tRuppotA3AR+33CBn1xy3W+Jbfhj4SR/m/ZL5LAAA=",
    "status": "gone"
  },
  {
    "slug": "blue-marle-pomeranian",
    "name": "Pomeranian",
    "meta": "Boy",
    "alt": "Male Pomeranian puppy",
    "mediaUrl": "/media/bMSEHnYcBTFF/970fdc1ee6/27b888_5e612a215bf343328c08d99e0e9c5a37-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoQAAkAA4BaJQBOgCP30bbr0AD+fnoCm/t3HZ1Ad98wqwTTxks3g4s4WrLbC+KMi/kqx8QRBJRxhwxDc9cIAA==",
    "status": "gone"
  },
  {
    "slug": "pomsky-ollie-boy",
    "name": "Ollie",
    "meta": "Pomsky, boy",
    "alt": "Ollie, male Pomsky puppy",
    "mediaUrl": "/media/Qs2IHRk7OQIm/c16bea255c/27b888_ef3324a358d64858b4873a146574c3b9-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAkAA4BaJZACdADPmIBnAnQAAP7hb8AsMlKDhcVjo4mfyMqec4F3Fmthyk+FSBtL6k8Lmxgtp9kNQ4NLFTOnAk43WqM30kixlujJE5LyPouctAAAAA==",
    "status": "gone"
  },
  {
    "slug": "maltipoo-bruno-boy",
    "name": "Bruno",
    "meta": "Maltipoo, boy",
    "alt": "Bruno, male Maltipoo puppy",
    "mediaUrl": "/media/w-F8mJLs2gtj/f06147a6d3/27b888_301f58cbae624a1da36a79d46571043a-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoQAAkAA4BaJbACdAEXTlh6dIMAAP72XUshMzW6F9JwG2lo34nF+h2JrQeEtTY5IrAtbv1sUE/WjpUHpmShlPx7xgsPTqBfHdwZvLBt5JDSWaKJztUPAsAA",
    "status": "gone"
  },
  {
    "slug": "maltese-buddy-male",
    "name": "Buddy",
    "meta": "Maltese, boy",
    "alt": "Buddy, male Maltese puppy",
    "mediaUrl": "/media/5ygCaO2TQb3v/f23ade89fa/27b888_6053b478acb641d1865de22aef938977-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAQCdASoQAAkAA4BaJZgCdADHaA051AAA/ltaE2nPK1k64YD/2DtTHiVbFJW5CbUHAUqjFrbXlz5JNSkaoVeM9BW1Ru1OWtvcHWwodRfLR5BO491mAAAA",
    "status": "gone"
  },
  {
    "slug": "maltese-charlie-male",
    "name": "Charlie",
    "meta": "Maltese, boy",
    "alt": "Charlie, male Maltese puppy",
    "mediaUrl": "/media/0c1rFiKXQLLk/75c6a20e15/27b888_b22287e7c1594de7ab2fba46eabea376-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoQAAkAA4BaJZACdAD5LGPVGIAA/gYA/gAaAAMnsshtJRY+/2nk2efYjExTLnJCCyLwNDBgHPdncwUj0TtjUeczzREG1LtR8v6VXb6SYC0xi7BHY7gAAA==",
    "status": "gone"
  },
  {
    "slug": "pomeranian-daisy-girl",
    "name": "Daisy",
    "meta": "Pomeranian, girl",
    "alt": "Daisy, female Pomeranian puppy",
    "mediaUrl": "/media/d_ji2d9LVy0R/b19b4cf1c2/27b888_c6cbb607448f469a96d73f3bc42a992d-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQAgCdASoQAAkAA4BaJagCdAEC2D5yGg+AAP7t6kffLNdjHBeG9y5wIPd7XKpkwe7NKy3ch7GVMHAQyT8YBcidYaJP/kNqiphgfH/pkfvneXVaohhGJsgmIwPQAA==",
    "status": "gone"
  },
  {
    "slug": "pomeranian-bella-female",
    "name": "Bella",
    "meta": "Pomeranian, girl",
    "alt": "Bella, female Pomeranian puppy",
    "mediaUrl": "/media/9jwfs8kSZW7K/9b8ae31d11/27b888_ab014eabe44c4f6ebaacb9ef1869823f-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoQAAkAA4BaJZACdACq22e8qxAA/h5tmtf6b3Jvmo1y3rrtq41/PC2ixyi3JSPU21wrrWKCfZsOw4pcx7aOW2BludfI8PmwNeR26J3ES6xmsmGAAAA=",
    "status": "gone"
  },
  {
    "slug": "poodle-teddy-male",
    "name": "Teddy",
    "meta": "Poodle, boy",
    "alt": "Teddy, male Poodle puppy",
    "mediaUrl": "/media/9XFYXsuvjIcz/8d1efc8baa/27b888_430ebbf87dc84b93bcd0b61709a2eaa7-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABQAgCdASoQAAkAA4BaJYwCdAYsZyZv3velBgAAzjp7cmj/5JzRW5QCR5VWIDXbqD8hyYM2lDo3ZUwMe/fIyFzNi7gHkkXWVHbnXgnoHJVVsIBw3GCJ83xQAAA=",
    "status": "gone"
  },
  {
    "slug": "poodle-molly-female",
    "name": "Molly",
    "meta": "Poodle, girl",
    "alt": "Molly, female Poodle puppy",
    "mediaUrl": "/media/WZKcpiogRBW7/9ebcb8d165/27b888_2b9e32b056624a45b62f7d7b4ec7d105-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAkAA4BaJbACdAC6h5rOQAD+sBDIcLH0OZye4LWe0Ou+OfNOUfuQNjr7sts3yfU/o2EIEmc1TUdc8dAaCzTllaLZr7l+gaAAAA==",
    "status": "gone"
  },
  {
    "slug": "pomski-coco-girl",
    "name": "Coco",
    "meta": "Pomsky, girl",
    "alt": "Coco, female Pomsky puppy",
    "mediaUrl": "/media/CXIzj6hYrmuI/eff60812df/27b888_ce94335cf4714a99a78c799f666f9323-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoQAAkAA4BaJaACdAYulnbKI51vaAD9/KduH7cFqFYQ1B1mfLSKSMc1odzT1vdPbxRp1sxDPV0cVaGhiXB2jnrs4eB5p7ommUsRMW0h4jodn0opkRp19kJrpKAAAA==",
    "status": "gone"
  },
  {
    "slug": "pomsky-rosie-girl",
    "name": "Rosie",
    "meta": "Pomsky, girl",
    "alt": "Rosie, female Pomsky puppy",
    "mediaUrl": "/media/FhrW7pE84bji/f7c57baf49/27b888_08271c7de284451fb9c848757f4838fb-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAQCdASoQAAkAA4BaJYwCdACxOIwAAP6bHtP/cNiQM6efgZ21Wf8O93AKJbViawKqLMgthDHOjGF8ULpaRfWpZ9uFUYZheTkPce9lGwe+iQAA",
    "status": "gone"
  },
  {
    "slug": "pomeranian-leo-boy",
    "name": "Leo",
    "meta": "Pomeranian, boy",
    "alt": "Leo, male Pomeranian puppy",
    "mediaUrl": "/media/5iCniMJshKud/8bfe42003c/27b888_84815fae2bd34283a7c79985cfc8b568-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoQAAkAA4BaJZwC7AEfhv79S+gAAP7oAMrALwaZxMWl/tFNe+0bui49eHJOV9KfBbqv/gshCq/4C1tyNO2uAAAA",
    "status": "gone"
  },
  {
    "slug": "poodle-molly-girl",
    "name": "Molly",
    "meta": "Poodle, girl",
    "alt": "Molly, female Poodle puppy",
    "mediaUrl": "/media/lsaKvJhLwHB4/4cf2a02ed1/27b888_5aa959cec570411a8bb9372abe23f5e9-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoQAAkAA4BaJagCdAD1kRhutLAA/slbs+oUlHXqW0Uy0jrXGXWYgqjhf8xfFuOIlYWVkE6FRIYoHEb1fuaZ03RIkCJIGEjlnsF83QexGWp/oWcH/sXtlgAA",
    "status": "gone"
  },
  {
    "slug": "poodle-rocky-boy",
    "name": "Rocky",
    "meta": "Poodle, boy",
    "alt": "Rocky, male Poodle puppy",
    "mediaUrl": "/media/51aMfxO7oeVe/6b70c96b1e/27b888_77a51d530b694ba58bc207f2a23e8620-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoQAAkAA4BaJZACdAEXsv4xUPo7QAD+1imgsgC2uTAqmsFzhU/RPjVAbefFFrdfE5o/aQVNDe0+qeRnf3nwP/feePXN2lj5LNBwRaEO12wAAA==",
    "status": "gone"
  },
  {
    "slug": "maltipoo-sophie-girl",
    "name": "Sophie",
    "meta": "Maltipoo, girl",
    "alt": "Sophie, female Maltipoo puppy",
    "mediaUrl": "/media/PYYTxpqgo76_/ae53ae6d3c/27b888_0d89c05fa55c43d4b6d55d573be83e73-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoQAAkAA4BaJagCdAYtLSojtSAA/uJ2tMRrEz3l9k6iExlCsyp9eaU3eABDLmNCwMqvRE6Vg2co7JH75TrWivWRUnwr4n6j9v4P+KD9urX2u7d1Zaf+XwAA",
    "status": "gone"
  },
  {
    "slug": "maltipoo-lola-girl",
    "name": "Lola",
    "meta": "Maltipoo, girl",
    "alt": "Lola, female Maltipoo puppy",
    "mediaUrl": "/media/HPs4cYizPzy9/22b104e2c5/27b888_f24865b2456b46feb6ea6694fe90660f-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAQCdASoQAAkAA4BaJZACdADp+guFlyAA/vC0nB6Zmm9y71ftDOrPLHZ06b6ShjWszGzWR2qXXW+2EKc3y0JT6Mhtgh22UoJGsQaAkryYt1YAAAA=",
    "status": "gone"
  },
  {
    "slug": "pomeranian-rex-boy",
    "name": "Rex",
    "meta": "Pomeranian, boy",
    "alt": "Rex, male Pomeranian puppy",
    "mediaUrl": "/media/QIIvMqQTe9jr/d997ae172e/27b888_14fd6ec24bd94522bd54a5ae345240b8-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADQAQCdASoQAAkAA4BaJQBOgCBiUVEXCAD+J34RM7hDnQQcA9q8oboBs/AMO4x6bOl2TeniTuWwP1ZUn/YlHy5rBB5sOQtdAOOwQz+7xe92PAAA",
    "status": "gone"
  },
  {
    "slug": "pomsky-finn-male",
    "name": "Finn",
    "meta": "Pomsky, boy",
    "alt": "Finn, male Pomsky puppy",
    "mediaUrl": "/media/tEAwWspMD8iG/1f55440daf/27b888_c68794a6e9ee442abb522a1d88a1e8cd-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABQAgCdASoQAAkAA4BaJYgCdIExFxK111dK1AAA/tKisucqXWWOalPAGaMit5TeskAKoh5METexDKZe2VJOiT8mBfamOkg4+0XDPw9Khms4FagXN8tang/dr28AE6pwSqQAAA==",
    "status": "gone"
  },
  {
    "slug": "maltipoo-zoe-girl",
    "name": "Zoe",
    "meta": "Maltipoo, girl",
    "alt": "Zoe, female Maltipoo puppy",
    "mediaUrl": "/media/fxj_9aZOSxQM/90c10b9c91/27b888_89e442e0035442308fc87fe3d2837f1d-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoQAAkAA4BaJaACdAD8dE9GiGAAAP7n//AtZS22+joULjfsi5MB/mefptbI8nFZlqT1EgHPJmvWFb9RM9XzyHjwtDBFyOsMTk6GygT7cAA=",
    "status": "gone"
  },
  {
    "slug": "pomeranian-mimi-girl",
    "name": "Mimi",
    "meta": "Pomeranian, girl",
    "alt": "Mimi, female Pomeranian puppy",
    "mediaUrl": "/media/BLOZLPixUcjE/ea8ee97fd9/27b888_870c748ca6ee45cf8e0a311232dfe289-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoQAAkAA4BaJbACdAEC1k8LFWAAAP7KlWI8RxAVlv/N/0F4t9/w2xhf8oeKLsb+01YYRbjxNjzTubcemnPGO1LvW/eVrQHjvhMNr9+AzMIAAA==",
    "status": "gone"
  },
  {
    "slug": "bichon-bailey-boy",
    "name": "Bailey",
    "meta": "Bichon, boy",
    "alt": "Bailey, male Bichon puppy",
    "mediaUrl": "/media/fI-hlHuSwrRw/e5ae9b6384/27b888_8d87239e23854214a8718ef8f02c2d50-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADQAQCdASoQAAkAA4BaJQBOgMVkwu94SAD8tKK4kEFRUx3qSInFi0DDSzsyYUKo7v/guWoOEY153vAmZLFP7NRw62xrMIwiJUbBm+s8wPjHX8AA8PhEAAAA",
    "status": "gone"
  },
  {
    "slug": "puppy",
    "name": "Maltipoo",
    "meta": "Girl",
    "alt": "Female Maltipoo puppy",
    "mediaUrl": "/media/Cl0B4v8U3Y-d/3dea5a9fec/27b888_1ae70e063fd7451a87d4dfe79794d58f-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoQAAkAA4BaJagCdAEVHACcSgAA/i/LifIcYmMBYhQVrn2V+DCft7syiswfoP5/5VjMh/KCpZTGf51uWTDo9jAEt6nEXbqsPEj47A/9NmMYtMCLPAAAAA==",
    "status": "gone"
  },
  {
    "slug": "maltipo",
    "name": "Poodle",
    "meta": "Girl",
    "alt": "Female Poodle puppy",
    "mediaUrl": "/media/sFgPBojUhFBo/5ac1429cf4/27b888_aa0ce426ca3848abbc7d695f8c818568-mv2.avif",
    "blurDataUrl": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAwAgCdASoQAAkAA4BaJYwCdIDZElvxow64AAD+79f31xtR81BNYbcIirOrDTe8c5P4CIv/i47P/lEGyUZ2ghG0ST/ypH3m+a0VZZ2/QZUuCyD+C+Q+TgAA",
    "status": "gone"
  }
];

export const BREEDS = [
  {
    "slug": "maltipoo",
    "name": "Maltipoo"
  }
];

export const FAQS: FAQItem[] = [
  {
    "id": "2bcfc70e-8c06-475d-aa8a-2b64932d30cc",
    "question": "Are your puppies vaccinated and health-checked?",
    "answer": "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."
  },
  {
    "id": "45fb5252-c038-41c7-afae-c8478b8f4f76",
    "question": "Can I meet a puppy before I decide?",
    "answer": "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."
  },
  {
    "id": "9585fb34-9d0d-4ee3-a903-38442633135d",
    "question": "Can I take my puppy home the same day?",
    "answer": "Local puppies are available immediately, so you can take your puppy home the same day."
  },
  {
    "id": "bd85389d-2116-4c4b-8500-0a5a82cae22c",
    "question": "Do you import puppies from abroad?",
    "answer": "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you."
  },
  {
    "id": "9c865c5e-bd1e-4bd3-9c09-cf193923123e",
    "question": "How does an imported puppy travel to Dubai?",
    "answer": "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free."
  },
  {
    "id": "18483536-4415-4cc9-8ef8-913421f9da89",
    "question": "Will I see photos and health details first?",
    "answer": "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp."
  },
  {
    "id": "653f64ec-6e3a-4e3a-b4ab-8862b96fd123",
    "question": "Do you deliver?",
    "answer": "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world."
  },
  {
    "id": "c7990450-8c87-47f5-9ebe-1490c7f47ffa",
    "question": "Which breeds do you usually have?",
    "answer": "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie."
  },
  {
    "id": "67b95211-ac7c-4582-a684-90fcd4e00812",
    "question": "Is there help after my puppy comes home?",
    "answer": "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend."
  }
];

export const HAPPY_FAMILIES: HappyFamilyPhoto[] = [
  {
    "id": "TUslu26Ueaq-",
    "url": "/media/TUslu26Ueaq-/9c3516c040/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.472,
    "focalY": 0.467,
    "color": "#e8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoMABAAA4BaJbACdAEYEXToWYiNAAD+7XFec1ZR07sQE7YGBw7sPpaP89MMnKFaR16/AA0nJ2rhr9pdw9tPC3Me0//oj9XM3167riJggwJGGvB9Wwsq0hS9ii+uw4Jh+Qw7iML3qZwAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "OcgEePeBmGuu",
    "url": "/media/OcgEePeBmGuu/41fb22320b/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg",
    "kind": "image",
    "width": 1320,
    "height": 1254,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.496,
    "focalY": 0.719,
    "color": "#b8c8d8",
    "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACQAgCdASoQAA8AA4BaJagCdAYxZv77Rzf4+7y7AAD+mqy8CNIxNmWKhS5OrhzJqYRqpQ4JEEp3zCIojdBuMhJv5Yg4IVl1i4/VC5o1Q0npggewK8tt+HV6iN4LgzBxj7UuV2qAHI/rcQimzSl9ZhAgAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "RYkyuv4DBCTC",
    "url": "/media/RYkyuv4DBCTC/d9e02a0dc8/edb2f5_7ed2ee1ba89b4230b52f5e3981b1b198-mv2.jpeg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.369,
    "focalY": 0.369,
    "color": "#c89868",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoMABAAA4BaJbACdAYwnKuOHnkUAAD+1vGpSSFgv15br1yb+0gcpuJdRg0PsQSIvqnnTTRhHh2Fjd8zrEEvIYGe7cz5hxej6jMNs28agt3wIp9cbmPECzttEWWgAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "d267R4d3lMSv",
    "url": "/media/d267R4d3lMSv/96d8604ca3/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg",
    "kind": "image",
    "width": 1320,
    "height": 1254,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.502,
    "focalY": 0.389,
    "color": "#e8e8e8",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABwAgCdASoQAA8AA4BaJbACdH8AgsyKDOVCk0gAAMxPxHYHoHA4YINwg701PBpyatsoTkcktbXoXrcxFbA//3bEvpk34pm5GwU2Y5lhtSlLu6MdXyI8AhXoTzNMue3x944uTvjffS9vel4PBPt7VxtUSORHMs2f+iYAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "XqxhmNftVKic",
    "url": "/media/XqxhmNftVKic/5adf2f28fe/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.508,
    "focalY": 0.257,
    "color": "#a88878",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAACQAgCdASoMABAAA4BaJaACdDiAByk1CB0omqp6AAD+6Cu0OJaD9DVJbTkeg47Mm1tdFKndEz9Q2HwEwUzTxjaN0ztjtEat+WUt1T78oJTfSq+QRKt1nQZcIr6D9giPfU16yUyuS+sZitrvPj0VGh1Nfltw+yqAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "1II_yVrwWdOG",
    "url": "/media/1II_yVrwWdOG/c07a8ef9f1/edb2f5_258010c661f64f3b8b952c5a2f7677de-mv2.jpeg",
    "kind": "image",
    "width": 1320,
    "height": 1587,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.526,
    "focalY": 0.296,
    "color": "#e8e8e8",
    "blurDataUrl": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoNABAAA4BaJZACdADHX7DZKR4AAP71GjOtL1aewt9exbka2QVHzf8p00eEamqFc9xPfZWDoexsqMaRl+IEXZ3YujXzGWzHUj5+NzB1KCYIcl7tYAZKPi8PEeFmbAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "bKP7vwN0R2OU",
    "url": "/media/bKP7vwN0R2OU/1aa47534b5/edb2f5_b8d76dffb97f46b5a9f2aaf9c1067b4b-mv2.jpeg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.405,
    "focalY": 0.34,
    "color": "#f8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABQAgCdASoMABAAA4BaJbACdADcYroA36cFpgAAyQlZuEqg0oF/CR9NJJwBF2lsriUmuIuiU5o1uOhB+e2dd3K6LTiELwio6rdGryWGxDM5tlU5L1Udjy3SSVXX8BNA/kvosEAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "ToVkYw_K3UrY",
    "url": "/media/ToVkYw_K3UrY/81a2bd9ac1/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg",
    "kind": "image",
    "width": 1200,
    "height": 1600,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.407,
    "focalY": 0.311,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAQAgCdASoMABAAA4BaJQBOgMX6tlkOI96AAOJ8QA+mrzt8hx5YUXBt0OZr1ohDPdmbc2QxvrzrW3h3r5VQa1y0sVzffkr9+sK/b9gM177HwQDLOUX2u8YzIl5FbN0ar222jNCtw/eJpGjw0lEAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "stDfO2jMfvb_",
    "url": "/media/stDfO2jMfvb_/6228a11db2/edb2f5_4b08003ef57c4663b55c9ac0c4147c36-mv2.jpeg",
    "kind": "image",
    "width": 1289,
    "height": 1481,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.512,
    "focalY": 0.425,
    "color": "#f8f8f8",
    "blurDataUrl": "data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAAAwAgCdASoOABAAA4BaJZgCdH8AgpST5NqVAAD+6IJl4U8ca4BIWoCxjSacCEJDMbeYfJIA7NlPdMVKb21Aua358oENcRM5OQE56fhfIouoJanH5u5lcWyxJ7Fl49PqbA6eQ3NQgAoUkFwiwNRYf9GsQH7/3Ui8aq0wqC62DAAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "K-U7RwW9j2A9",
    "url": "/media/K-U7RwW9j2A9/09d7edc058/edb2f5_22d3cc4ae0e14216a0d3a1ec9796649f-mv2.jpeg",
    "kind": "image",
    "width": 1289,
    "height": 1330,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.513,
    "focalY": 0.302,
    "color": "#381808",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwAgCdASoQABAAA4BaJbACdAYulS7ZNihwAAD+7SjYCrMGyojXUXEbsBjGlC2U5bWU8UBCp7VeiZf1XP1drdRncNpm8+eFMPR9YLPug6KYbD9WpASgOPSAwzm70joTBrj9GlGkCMhIrM65+Ikxjsxif1EwgsSwiAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "s23WYu0qJQ_h",
    "url": "/media/s23WYu0qJQ_h/d0ad444e50/27b888_a887dbff51fb420d95774cce6a8d54fb-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.542,
    "focalY": 0.341,
    "color": "#d8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABwAgCdASoQABAAA4BaJbACdAYuvdYtfK6W6FIgAP50qkahKVk7G3efzxFPgx9ZYKZqbwlGSQdzNPviebEkDrs8ILvggbkn1y7l7KBWLFnR4TvIHZ1ALdepgGc58sb/Oqcnkz58wQqjQ3AAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "ab5hEGUKO4aY",
    "url": "/media/ab5hEGUKO4aY/de923fd8eb/edb2f5_d5177ed7ae1344d7acc11e9770df7b74-mv2.jpeg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.501,
    "focalY": 0.386,
    "color": "#f8d8c8",
    "blurDataUrl": "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACQAgCdASoMABAAA4BaJbACdAYvNzkUeXzinfrgQAD+yMawm+H9WVxyicRDbYFwCStWoKJ6vcXKbLI10XhS5CKEX0zR51GqqKZyl9wC7N4pZVeSyTn14FIIUMMgVP6oSmsJLSZPynZXDsySrQrTBLu8AAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "yEfM9sdMluCX",
    "url": "/media/yEfM9sdMluCX/46ecd570ef/edb2f5_099acc542ba14359aa8c0f933cb4ef2c-mv2.jpeg",
    "kind": "image",
    "width": 1306,
    "height": 1600,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.47,
    "focalY": 0.498,
    "color": "#d8e8f8",
    "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQAgCdASoNABAAA4BaJbACdH8AGA/XXH6gAP7x8tDf1FauBTjXLNl/df86GSmysle+LIeGYE1unO3GwLTUEOA5ZEgGnowVEkqTKTPxDsDpWbBUILgoSG+B0RnD5nzulIFsFxoAtAAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "_41LE-nBf847",
    "url": "/media/_41LE-nBf847/2ea8e152eb/27b888_76aa3ad05faf40bd8eb2a6d826737525-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.701,
    "focalY": 0.553,
    "color": "#c8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwAgCdASoQABAAA4BaJZACdAEP5M/k6KlgAAD+55i7R/GUaaEgeJJlft9T6R/fUPWYcz5vr33fRaAwRPTI94WyYruMcxNNHaiRKU/ED2jrumGgJl7Sk9tzKgY3cJVsA37FwnLftN0igAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "tuarxe-C9j5H",
    "url": "/media/tuarxe-C9j5H/913026dd39/27b888_b22e1ced7da74ea7a14a68474d8c2dc0-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.391,
    "focalY": 0.527,
    "color": "#f8f8f8",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAAAwAgCdASoQABAAA4BaJagCdAYv+8zqMlye+AD8+gSul1GXajqrrIDSJUY9puW+3J5utLv/5reQ8GDkUCYTgj5s45TrXEMH2jN1HlfenGIm244DESJnwtH2x7YEbtVoqs0fCwnrIoDCkOaGzg5bzsDUTKY/lPdS+zJ/0RuwAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "UuJqjsRN-wKL",
    "url": "/media/UuJqjsRN-wKL/047b245604/b942a5_a1ead54bc6934e5ab953e98d4aa0312d-mv2.jpg",
    "kind": "image",
    "width": 2150,
    "height": 2686,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.542,
    "focalY": 0.321,
    "color": "#281818",
    "blurDataUrl": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoNABAAA4BaJZgCdAC1iEVuJlwAAPa/qSwns9Un+2DPla0nD7xNhPP8DPE9t324XLXeE3qDjdirtoHFcx9AcxL62YqkjTOmLxcSRP38V6YpUPUA8QZB2t/0ELkyfnAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "qZ5mPGpLO-G9",
    "url": "/media/qZ5mPGpLO-G9/1d4c092a1e/27b888_4af83a5cffb44045bcab615b0cbc237c-mv2.jpg",
    "kind": "image",
    "width": 1200,
    "height": 1600,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.405,
    "focalY": 0.424,
    "color": "#c8c8c8",
    "blurDataUrl": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoMABAAA4BaJZQCdADMyCtbngAA/rIf68urvq4wJYI6JYt3Ia+368Gpe7i144A8mIt8yUjmLZm7kdp7MF8eaeoqplr4xpa8aLJFydXmlgAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "xHEMhVTwflC_",
    "url": "/media/xHEMhVTwflC_/8859dd626c/b942a5_65113182432144f49bd50bb009e7d88c-mv2.jpg",
    "kind": "image",
    "width": 844,
    "height": 1327,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.346,
    "focalY": 0.588,
    "color": "#282818",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoKABAAA4BaJbACdAEf4ttYbrAA/togkf2p1OY4XkpOaWv+mNvQ8c+VPWBr3tBDHp4NTdvP25qGW+pv6cnqD8lJhQ6NE+FPx+ruDy2t2EdNGW1bU5sofQfW4IwAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "QYUwdroeZC35",
    "url": "/media/QYUwdroeZC35/52e467dddb/b942a5_03ab53e8167c454eaf75e37491e51b03-mv2.jpg",
    "kind": "image",
    "width": 787,
    "height": 1339,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.56,
    "focalY": 0.361,
    "color": "#482818",
    "blurDataUrl": "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoJABAAA4BaJYgCdAD0r+iYp4iQAP5rCOccBIvC5C8CdpSsaitqUyFLiFrbWGzIe1Oz4iOFWe196H1APSH35lTd6cZlmcYhGGkZvzdPXg4AAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "rZE7ypWUH0wz",
    "url": "/media/rZE7ypWUH0wz/3ccfc972cd/27b888_d8c90ec444654b9c964dc2527814ceaf-mv2.jpg",
    "kind": "image",
    "width": 959,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.54,
    "focalY": 0.431,
    "color": "#88b8e8",
    "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwAgCdASoMABAAA4BaJbACdAYvhyd+k7EMgSEAAPhCpT2r+2W7apNXRN5t7vcxHsGnbkXphWH21M6cq5l1wsOKWvPiYGYXrHqeCF7XT8s3242oRjZCugFJkw9TtVb7aLsvOsygIuiUp2JpvsL4RGiZCRUAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "Sg8iy_EOrJah",
    "url": "/media/Sg8iy_EOrJah/684699406d/27b888_3594e056bf964a7a839a1bd5ac0c859e-mv2.jpg",
    "kind": "image",
    "width": 3120,
    "height": 4160,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.485,
    "focalY": 0.476,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoMABAAA4BaJQBOgB+FxB1p6KuLAAD+m1NTxfesvdO1MmCd3EpVs+v+neGxZsVv3+HtOwSFaisaINnq0M6tUrsI0SsSPsk6dFwzDXU/IWEOlNkb4/stgVfe/e77HuEwAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "CVsVLsnCV0L3",
    "url": "/media/CVsVLsnCV0L3/626d9c9855/27b888_522e394293a845bcae93adec46bf499c-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.564,
    "focalY": 0.368,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAwAgCdASoMABAAA4BaJbACdAYwdbSHI3+sgAD+yDNfMih7TjVrJzAWKNY/Lp6myZb91JVUYmgIh3l7durkyXug8Bq5pFkO6MGXxeH6UZLMs8+oun9Gxg8iNQBcGMWX+XCN1t87jqKGkAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "1ziQH1fmyl-k",
    "url": "/media/1ziQH1fmyl-k/6193c5fa7f/27b888_d76b636e082842139943ca9fece80632-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.503,
    "focalY": 0.3,
    "color": "#b8a888",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAABQAgCdASoMABAAA4BaJZgCdAYwnnkw6ttD2AAA+Foa/i5+1YB0DZDUOeoFoRXySjde7HlcwtUwbwbwaLzbOfI+GvH4SXVNsWB0T48HtFLnBIV1B/ZQAP86qzkT7djl4vSe2CnA0wfX2AAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "2BoSaeBhLer8",
    "url": "/media/2BoSaeBhLer8/05c9d02f5a/27b888_48694c17ac634f32b63bcd21052c10c3-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.466,
    "focalY": 0.425,
    "color": "#c8b8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoMABAAA4BaJQBOgBo1viibzJNAAP6bu6ODLi2MmVyEuZ8AMRv5hwCfbJ6fkiBo4evTi7tYBq5X0fBNGOhrhe5TCAgRP+9M1c+1Q67c3Wj7mGDBHyfbU2k7QpnQYfStZyweAAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "QLO4DWvoWlJY",
    "url": "/media/QLO4DWvoWlJY/7ccb7aae32/27b888_13d2747a7f454379a5670b552690f728-mv2.jpg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.573,
    "focalY": 0.428,
    "color": "#181818",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoMABAAA4BaJQBOgMXDq1uZV94AAP7UzBLB6kQWQYcI35m+fm5LkMEerkFnYOU8ZsNfwF8CX1BM69FS7UKXI7xRFdaLYIm9djXlPydsPGCFWNTn29pujorL1G6AawBgAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "xaIi_2gMoj_N",
    "url": "/media/xaIi_2gMoj_N/27123a3e2c/27b888_3375199e717a4f6ca02e902672664e79-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.494,
    "focalY": 0.378,
    "color": "#a88878",
    "blurDataUrl": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAABwAgCdASoMABAAA4BaJYgCdAEf3WQX+hSjMdgAAP64MQQtU9IfKaA0Pe2fAqulvui81ZkvJtVcIuETA/1+jUUqO+mqwx+FVqHY+cZUhVG4Bj6i53pB2VN3aa3Qic9AAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "GyAYtgNRGHUw",
    "url": "/media/GyAYtgNRGHUw/379090aed6/27b888_3f1463156de645feb90bf306b2572b76-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.501,
    "focalY": 0.353,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoMABAAA4BaJQBOgMY7taVW/LLaAAD+uB49zdex3XeA+ujCKDjiXvPl3ORVembBZ56TW2hOn8o27K6nz9VBEoxB+YNn8RbFpnvtuaCQJsD4srBRwmiLRXb9FLaQm6cAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "NCnzIyNwzZiC",
    "url": "/media/NCnzIyNwzZiC/11eddf4e8e/27b888_f405d17027174cdfa4437b9b1d84eaa2-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.428,
    "focalY": 0.404,
    "color": "#d8c8b8",
    "blurDataUrl": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoMABAAA4BaJQBOgBujhYaeUEAA/uFN2ySqC1N7Mkg+syb/pt1K6VQoiBUONGnau1XI7E6a0GEqWWaiZJmyHyX6qQRC64IXWV5hH7e8He/ZjASgAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "2RCKCPAW7oIk",
    "url": "/media/2RCKCPAW7oIk/31af5cd06d/27b888_9b40a22ad84e4e8cbf625acab1bc8e4f-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.458,
    "focalY": 0.37,
    "color": "#d8c8b8",
    "blurDataUrl": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAADwAQCdASoMABAAA4BaJQBOgB3yfDuM7AAA/phXSTf7sSnyPX71oZLeUyTBrNff6H05ugK/6drbk35Tbpf/67mIDj98i98ezxXSKNfqy3emDXY0QzXSl+vYoT20PgW0dE+x5dAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "d9RWhCKfRHOc",
    "url": "/media/d9RWhCKfRHOc/c549944174/27b888_0ad908eb6ba745b7b3e1426338af1803-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.49,
    "focalY": 0.322,
    "color": "#d8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwAgCdASoMABAAA4BaJagCdAYt9a9+RSmgmAD+6CdN+UCCcI5YcijVh+3TMUGzdnXRCDUeKSty/3cEEkF5Dsisj6pgBa7OEdICUAbRElnh1aHeEOV9gp5AubsS9aLQAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "tI7E08CB-sVp",
    "url": "/media/tI7E08CB-sVp/b655581264/27b888_a649f91c871046d2a4231ceda00ec982-mv2.jpg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.384,
    "focalY": 0.578,
    "color": "#f8f8f8",
    "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAADwAQCdASoMABAAA4BaJZgCdADc+6C9ICAA/uiRagrgT7bdpz+sVcNmuxtDC56op12lR8euVGoRVcp55cKc3n0ykic7aCqOWvWVLlP+74ywWJAZdVdbzRTmoo6SPwCNUp0+zWK8hp1wMxOeKGeAeYAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "uL-D7uBZjs12",
    "url": "/media/uL-D7uBZjs12/3cc9e2690e/27b888_96b9eb6428164f41b124137673bc865c-mv2.jpg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.62,
    "focalY": 0.375,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQAgCdASoMABAAA4BaJYwCdAYtfuIh+CJ3fUAA/mbEE0oPcSvImV3htOxjtesbszFPDBkSDYMEWu/1VBkYld/qb98uHUaGX6qkOwBxub81/w8RO04BrFYrIqkavRD6H3JAbvsI8PV78uJEEAAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "AK4nDMw3v53a",
    "url": "/media/AK4nDMw3v53a/9ded532913/27b888_89af9713331443c3b9f4b72a83d646e3-mv2.jpg",
    "kind": "image",
    "width": 960,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.554,
    "focalY": 0.45,
    "color": "#d8d8c8",
    "blurDataUrl": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADwAQCdASoMABAAA4BaJQBOgCPgdKpIhdAA4m1vYUt/xi3xYE8jAKcyVVUwX5KIYrZHuXHc4GhK6J9s7yp3wOG3niZJ+Cuw4rWNuyulMzTsczRPV20IOwCdK2pMtRYkAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "SXZSpIZJimpQ",
    "url": "/media/SXZSpIZJimpQ/0a488a56a5/27b888_927dffc200a44f9dafcb953b765beec0-mv2.jpg",
    "kind": "image",
    "width": 1200,
    "height": 1600,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.629,
    "focalY": 0.372,
    "color": "#988868",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAgCdASoMABAAA4BaJYgCdAEQ+dloOA5bAADyW8ZzyxQnuy0RbWlzgAk8IJoLqWaT7sj9WnMhKiKZyqbZMbTalh6/1Rp89mO5MWc+lWBhIbJMZ8w8QiWj6nkfzC1uLCPoAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "NBeJ3y_g-Iee",
    "url": "/media/NBeJ3y_g-Iee/a4a5827b07/27b888_bba195dd5eec46e798d3dc05790f1e99-mv2.jpg",
    "kind": "image",
    "width": 720,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.448,
    "focalY": 0.366,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAQAgCdASoJABAAA4BaJZACdAELZPFLfLAAAP5hargVLeGOjxYFMrFICGC2c76ZhGOLTt4thNKmvzGtO0oQCBg/j66WbZD4fn9SxOFI/CvM8WKgTWbJN9m0Or1gbMyxSkagAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "6Abv8pfqHoEA",
    "url": "/media/6Abv8pfqHoEA/a6fb93823b/27b888_ff288b45f9694416b3f3d019d7a9a1d4-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.332,
    "focalY": 0.707,
    "color": "#c8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAQAgCdASoMABAAA4BaJbACdAEXZ2tQc1FYAP7KhGlp3Ud/Wd5WzqLGnbLAN21JjIr21Yeq7n/FD3OmEll9zg1bNpprxDa/SHyvAc4YDzbi+Lwmj7FdrvjGbLaipzB4Acl7hsm2TAAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "UFzHrheMHQmi",
    "url": "/media/UFzHrheMHQmi/7ce45654d8/27b888_ade4298d721a444888379393d06745cb-mv2.jpg",
    "kind": "image",
    "width": 720,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.259,
    "focalY": 0.489,
    "color": "#483838",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAABQAgCdASoJABAAA4BaJYgCdH8AFjin4b6KDwAA+yB92ZnCKuQCBs5iklOiaf+qfIub5ywu7apZU1BCm5TUq+bWiowkGdEwGxAZtf/Dv5KvwcvhKtT2KWAmkAAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "937wIvKxefpy",
    "url": "/media/937wIvKxefpy/a42f072027/27b888_664db706809c46eea8e75db06885de6a-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.496,
    "focalY": 0.479,
    "color": "#d8c8b8",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoMABAAA4BaJQBOgCB0mo1KVh0RAAD+6zNpBOGegtmnnT6vX3Yjm5cwTzoCUH698qkqSFsGcBr+LDxgP7v5uDrFlbMPZydo4vsfFpBbPXyIq33MSdVCio/3vy4Q6YAo4AA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "BxM75hECdt9p",
    "url": "/media/BxM75hECdt9p/eb17b83cc8/27b888_659cfe02524541e0ab0a94cc71a2a189-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.508,
    "focalY": 0.478,
    "color": "#181818",
    "blurDataUrl": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAADwAQCdASoMABAAA4BaJQBOgBn5giS5vQAA/t7yHXwI2tIEblpjfUpfJIL+c1T0T0iLbFgLor/hW3JqqCco51qgvm4ROZaYFutED7yuoF83k/TSfJQ3QOFPgpAgAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "O88qTc2s7KH8",
    "url": "/media/O88qTc2s7KH8/032fd55fa2/27b888_da4b7d60a604414e95bfb91efcdad6f6-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.533,
    "focalY": 0.354,
    "color": "#d8c8b8",
    "blurDataUrl": "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAADQAQCdASoMABAAA4BaJQBOgBujKDtbIAD+4VBMuzezOD31wvHxEF0NMBnF92baX4kq/XYOHywTGyJODk4o6n94nL1/33bK7G5xXnta2j6At1mh3+0DC8DbziOVGVyXxAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "PAAMBTTfmXOK",
    "url": "/media/PAAMBTTfmXOK/37d59d6ee3/27b888_dad1db0c47834985a25b98b067cf563e-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.392,
    "focalY": 0.412,
    "color": "#d8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwAgCdASoMABAAA4BaJYgCdAYs3bL7Gnx+6/2AAP7hW15NgWujzvmq49/HjkXrdcgMVD0UA+wzrLhrhSKEvsXlIVIKexV49vl/wYW9TJhVBq/EpQv/twEIGQ0XqgTdgYAAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "9A74-QBbi78w",
    "url": "/media/9A74-QBbi78w/d788ec6f31/27b888_96324661ab4742649af7d72ba465f0a8-mv2.jpg",
    "kind": "image",
    "width": 2142,
    "height": 2856,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.601,
    "focalY": 0.432,
    "color": "#b89888",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoMABAAA4BaJZACdADNEp5ESnAA/uhU0C+lKXkk3eaitgvirAwQg02KQ9kUumgpXq8/dUxIyyUiyrFCgRnnL8XKUaslwrkpNEp5e4zah5ve5aLr5tX980AA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "0wEBefsp1F5j",
    "url": "/media/0wEBefsp1F5j/1b67ab78e0/27b888_8727fecbf89b4648b443b9bfab83fffd-mv2.jpg",
    "kind": "image",
    "width": 784,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.538,
    "focalY": 0.451,
    "color": "#887868",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoKABAAA4BaJYgCdAYxjqyMmLEyTQAA9Y8Zedq55lmRyk8kdUMQbxh318HmWnsouoE36uA89tB+1bqFo8lHaB6AqFA3QG6Mn0UWk3kkL2zLpq1Ra2utVcfF20AzSrXRwAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "hu2K_kmYs7s9",
    "url": "/media/hu2K_kmYs7s9/0e8b423b7c/27b888_b5a504249d254ac7a02693ba340c74fb-mv2.jpg",
    "kind": "image",
    "width": 958,
    "height": 1280,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.497,
    "focalY": 0.497,
    "color": "#181818",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoMABAAA4BaJYwAD5PwfQ+Yy1jwPiAA/vWLdLOPMdjCko4dWXjbLvZLHV56XLFQNHstACmiORE7ZGeFsOvo56+vr4cCxtjugtlAU1ThwZQzZR2o7680fq2bX3sIxARoAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "LpUvbTEyekwN",
    "url": "/media/LpUvbTEyekwN/556d16df42/27b888_74e15c47a77b48a39e5174d2657bc417-mv2.jpg",
    "kind": "image",
    "width": 480,
    "height": 640,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.505,
    "focalY": 0.447,
    "color": "#d8b8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoMABAAA4BaJZACdAYtBvvMxkINH9wA/uEo2s2gs6OOOKSV7DoUBY1vRt76/4tQPAd/e44Y/lEO5/rBUlYZkcR5/dq40ED1Q0kXpe9DqKhYmSwqbZD2AAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "dI8Jv0KRTiLJ",
    "url": "/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "Lulu 🧸 with her new mummy ❤️",
    "focalX": 0.542,
    "focalY": 0.581,
    "color": "#d8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAABQAgCdASoQABAAA4BaJagCdAYvDkjfodzQmgAA/sRUM9ErPdF++UNHno8F4ODXxvzV50QvreqNYMaqodPI/+6fFoRhnf74l572sQnVhhXxmzpytAX9zhrPZzxiw3WhBltt4hVgAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "TI-WtaFssfQt",
    "url": "/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "Adorable Maltipoo baby 🧸❤️",
    "focalX": 0.475,
    "focalY": 0.563,
    "color": "#d8b888",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABwAgCdASoQABAAA4BaJbACdAYwdR9iDT/9cZQAAPzla7uNFNelrpuzSBXfvl2paybhKmpEPnIBdcgkitUDszW04g1wsstg3jV0KzLvj2Vyl+A3XgUSuqt7d5fSo819LKajXrRvGhhDH2Vu6bnRdV9o+YyhpyTBcAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "j6T9eswP2eS8",
    "url": "/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "My new teddy puppy 🥰🧸",
    "focalX": 0.463,
    "focalY": 0.433,
    "color": "#c8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAAAQAgCdASoQABAAA4BaJZgCdADmY0progYwAP6KX0398bKQTJrV30x655mZ4uuxpGquthc8y6c0AQYRftXvwOVvuTq7pQjK+WE8PuLtkIAIZbn0YEDn4EC3H1bE1q5pKOYNmVtvXqci9cC0i2QBsSmorduGAAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "HJgL4rRnmReV",
    "url": "/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "Our new puppies 🧸🥰🤗",
    "focalX": 0.573,
    "focalY": 0.467,
    "color": "#c8a888",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoQABAAA4BaJbACdADME1hf1FkAAP5hZiDT665emvvPoBdPjoeaG5jStwgy1lGb1XrQ2ILbHo+LzHP2ldaNss5XVGxCYTrwltWoT6tMqajUJmkMU5MukklX696WWBLo5YcjcAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "uc5ANs5jm7r7",
    "url": "/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "New puppy 🧸😍",
    "focalX": 0.607,
    "focalY": 0.674,
    "color": "#e8d8b8",
    "blurDataUrl": "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAACQAgCdASoQABAAA4BaJbACdH8AgpiUEkMQZTCRwAD+1rG/irOq90Wn2ivqTZRoNp0/tg6nogNU88MAf4pmYMYPt1BA5HZp5fKFP5gdmPLLn7i+2ox4+IJjI8pRatDLRjnVluciNvP8cAGS77QO2umJZv9hcFPk3szIBWhNoAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "pRJubyqHw8p7",
    "url": "/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "Gang of 3 😍🧸",
    "focalX": 0.546,
    "focalY": 0.513,
    "color": "#b89878",
    "blurDataUrl": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAAAQAgCdASoQABAAA4BaJaACdACZc5pmT0IAANyS3MgT5zcRh2SMASk+vuZnX8EA+Aa3aKJwZJFVGQLZC8t2HT/uFV2Ptwl8OFM9Mim55QUu2v5D6wkBxg2bzMHVVPNX6DLVIoAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "4wOJk9azop_-",
    "url": "/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "So happy 😍😍",
    "focalX": 0.578,
    "focalY": 0.305,
    "color": "#583838",
    "blurDataUrl": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAABwAgCdASoQABAAA4BaJbACdAYu5gKOX9jgIJLAAP7CKBWCtkFxFg44sVZb9sz1IhjPDJeDDZDbGLdQFMGxnGC7VthDIa+n7vaDjHrqThtj8kPCnMBHsqPPQAUvHkTmaxqIvRTYrhPJY8pXPpMvBC7O7pQZVOzMFpgAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "2ZpD4FCAriYZ",
    "url": "/media/2ZpD4FCAriYZ/56ea196e78/27b888_160a7ee974d74fc7ae452afc6e5fccea-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.535,
    "focalY": 0.348,
    "color": "#e8c8a8",
    "blurDataUrl": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABQAgCdASoQABAAA4BaJaACdAYvrlHXCFHN3fAA/uqZCrNKx1a0p5Ac0g+awfdeZriYCCvFMiDYnK/mSlj3+X5NZUXGHwBCUH5HZGcOkipLuKibYxm/jCFjMEE7LoakLF6Ww4G8z3GKP9netObUCrSbSqsAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "BarQuR6VS6XX",
    "url": "/media/BarQuR6VS6XX/3acd4e6449/27b888_2255683016304a278b17353cb21c1f45-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.529,
    "focalY": 0.414,
    "color": "#c8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAABQAgCdASoQABAAA4BaJagCdAYubywrxhyCVhIA/sEsa1FPBH32zKzT40HcW/tXWNnxhpdOHv2LQKA9XjXn1r+NUkdgMub7cP5nu6e1Zx/tXeCuRnu0bSEUToFNOLcN0miSNg6w3q2ec88xNLh1w+AmVq2Q3SgAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "l_M8IYdzFJHb",
    "url": "/media/l_M8IYdzFJHb/bc8ad2f58f/27b888_80b7b3c14907460f8dc1457ffd99a99d-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.547,
    "focalY": 0.337,
    "color": "#383838",
    "blurDataUrl": "data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAAAwAgCdASoQABAAA4BaJQBOgMYiunCheTOvAADiILsz2gkzyl/faHwREGdZ6iBq8AMQ96Mi0Rn3SWpTyytPl9G8BjEQFK6dcu4Ljt+w5krufvsyHgG6JkpwT9WpR55RqxT6rlgRR/cuo5BAvSgAAA==",
    "durationS": null,
    "poster": null
  },
  {
    "id": "aAf69e7YtFrb",
    "url": "/media/aAf69e7YtFrb/e162c491b3/27b888_f18596e1a72543d695d79416569bef23-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.574,
    "focalY": 0.28,
    "color": "#c8b898",
    "blurDataUrl": "data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwAgCdASoQABAAA4BaJYgCdAYrxR8yMQ7kAAD82Q64Z++bOcZM2f14y87MWHQ5Wg591hC1srxZ4JlrMxeeIfh7gNAmsflPgtsGcj1yhz9iwN0z5bBRLP05EoKdEg7SflekK7JzbY1E/N1kB5Yu9dy7L4QnwjgAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "qesMnrX7cliq",
    "url": "/media/qesMnrX7cliq/da5bec6e86/27b888_3def48865368404392a98437a48e6ec7-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.525,
    "focalY": 0.411,
    "color": "#384858",
    "blurDataUrl": "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAABQAgCdASoQABAAA4BaJbACdAYvXdZTak/O6QAA+xmX1k7qM7V+caoIMSfqFeNAOaH53s7PWNKHvsagzOo9lkJFaxGWFt4QGRuXXU5U8sLkou07Arjba88bbVcOt2vVKhHYAUHNYm8OxBWqs9mKQUp6fEy4nDavNAisKsAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "sqPa3JOR3OPc",
    "url": "/media/sqPa3JOR3OPc/4273c20214/27b888_62c31ea0db1f452a8ca28369aef45c8d-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.593,
    "focalY": 0.518,
    "color": "#c8a888",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQABAAA4BaJbACdAEKDwZ5MAAA/sOSdfeND/k70bwnm35Hw5cAD3V/uFI09nSFk+QpOUnDelr0oUh2lw5jVANko6YvAqsoFcTs+jmceEgNutlRBXtykxG0U2+jZlIoAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "3h20rIasJCOa",
    "url": "/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg",
    "kind": "image",
    "width": 433,
    "height": 433,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "New pup 🤗💫",
    "focalX": 0.413,
    "focalY": 0.639,
    "color": "#182848",
    "blurDataUrl": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAgCdASoQABAAA4BaJQBOj+ADEzVnFAhaavQA/u9OoVPZtGNMSP4OqARzAF2Ho1qwjxyh07MB7+Ua7l9K0/IgyZFr/9DtbqW+fEDJWMLOPdJmDqo45f8MrloEaAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "NaV9L3-u1vss",
    "url": "/media/NaV9L3-u1vss/cb3d13765a/27b888_91d95c12076a4efd94128b14dceb216f-mv2.avif",
    "kind": "image",
    "width": 340,
    "height": 403,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.613,
    "focalY": 0.335,
    "color": "#f8f8f8",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQAgCdASoNABAAA4BaJYgCdH8AEWIPFbQQAP74uh/fuEHYKvG/E9q9hCmtf8S0nrEbEM+vuxmIjhI1OruOxTn2+x234PjlorhAd58N0vSIQuCvL5PeQe6KyOBXlkF5chALcAoAAAA=",
    "durationS": null,
    "poster": null
  },
  {
    "id": "EINH5_Xbws14",
    "url": "/media/EINH5_Xbws14/dae797ecdf/27b888_202b27e8ecca4b4d8715c8f648bd35e4-mv2.avif",
    "kind": "image",
    "width": 535,
    "height": 467,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.351,
    "focalY": 0.447,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQAgCdASoQAA4AA4BaJbACdAYvXi3yX7AAAP7smKIgcjMr9c3VJHCHet5QLcuDjiWNUQJiU/9TaZ9w+0K9+eDy9xovZtL1QtLlRsB81SloFl/IEegA3/h3oH7wb/+aqmudG/p/GIqWAAAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "wyDhW6yEQ6ef",
    "url": "/media/wyDhW6yEQ6ef/e012615aab/b942a5_9381a9a0ca3e40b4b4f31906cf7fda56-mv2.png",
    "kind": "image",
    "width": 1618,
    "height": 809,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.431,
    "focalY": 0.601,
    "color": "#080808",
    "blurDataUrl": "data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSCsAAAABP6CmbSOoW6GUP7Z7t9CIiBBQH0MtJElQuPEnsihrcP4qJxDR/7iI7PAHAFZQOCBUAAAA0AEAnQEqEAAIAAOAWiWgAnQAxoRHaYAA/tasxBjQmLN7V7dYx5eYpzvyyBvMKlUsW6rst9KOiUD5KbS+TeaXSHwUmeBdPg2durYk/qp3MUSqnEAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "n6BJMOg_-QYI",
    "url": "/media/n6BJMOg_-QYI/82329c84b0/b942a5_dc4082b7b0454025bcef4c790c4f4e68-mv2.jpg",
    "kind": "image",
    "width": 1512,
    "height": 1321,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.575,
    "focalY": 0.346,
    "color": "#e8e8e8",
    "blurDataUrl": "data:image/webp;base64,UklGRnwAAABXRUJQVlA4IHAAAAAQAgCdASoQAA4AA4BaJZQC7AYs3UentN+AAP7MaXxhpef7iHkvolxrU5JpovK+sGrif+lM42K/B9yS6wk6htQO3F9pqvjewnJNs1pZ+N1izi4jiEMa2+cxZT9mBb+Z9Fv1X+P73Qrc8iRlLTlDSIAA",
    "durationS": null,
    "poster": null
  },
  {
    "id": "nTiIYDlSaIjG",
    "url": "/media/nTiIYDlSaIjG/334a39f6a3/27b888_febae47e079240d28d1602b54813dca4-mv2.avif",
    "kind": "image",
    "width": 720,
    "height": 405,
    "alt": "A happy TeddyPups family with their new puppy",
    "caption": "",
    "focalX": 0.482,
    "focalY": 0.305,
    "color": "#181818",
    "blurDataUrl": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQAAkAA4BaJbACdAYte/ab1oAA/tYQNegkoMhAZASbVfwKa8zQ0/1YvpDETfS7UidVfTE51pjvLIppKkqRyc5l+5gOVpnPjXAaLDPQwMtqVsLuPKos0gRnfMWCqFJaAAA=",
    "durationS": null,
    "poster": null
  }
];

export const HOW_IT_WORKS = {
  "journeys": [
    {
      "key": "local",
      "label": "In Dubai",
      "hint": "meet in person",
      "heading": "Meet your puppy in person",
      "body": "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.",
      "note": "$undefined",
      "steps": [
        {
          "text": "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.",
          "title": "Explore our puppies"
        },
        {
          "text": "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.",
          "title": "Choose your puppy"
        },
        {
          "text": "Spend time bonding before making your decision.",
          "title": "Meet before you choose"
        },
        {
          "text": "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.",
          "title": "Pick-up or delivery"
        }
      ]
    },
    {
      "key": "imported",
      "label": "Imported",
      "hint": "order upon request",
      "heading": "Order upon request",
      "body": "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.",
      "note": "From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.",
      "steps": [
        {
          "text": "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.",
          "title": "Reserve your puppy"
        },
        {
          "text": "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.",
          "title": "Personalized consultation"
        },
        {
          "text": "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.",
          "title": "Import and arrival"
        },
        {
          "text": "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.",
          "title": "Welcome home"
        }
      ]
    }
  ],
  "steps": [
    {
      "text": "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.",
      "title": "Explore our puppies"
    },
    {
      "text": "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.",
      "title": "Choose your puppy"
    },
    {
      "text": "Spend time bonding before making your decision.",
      "title": "Meet before you choose"
    },
    {
      "text": "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.",
      "title": "Pick-up or delivery"
    }
  ]
};

// Helper to find a puppy by slug (searching available first, then generating profile from gone-home if needed)
export function getPuppyBySlug(slug: string): Puppy | null {
  const found = AVAILABLE_PUPPIES.find(p => p.slug === slug);
  if (found) return found;

  const gone = GONE_HOME_TICKETS.find(t => t.slug === slug);
  if (gone) {
    // Generate full puppy profile for gone-home puppy
    const isBoy = gone.meta.toLowerCase().includes('boy') || gone.meta.toLowerCase().includes('male');
    const breedName = gone.meta.split(',')[0].trim();
    return {
      id: 'gone-' + gone.slug,
      slug: gone.slug,
      name: gone.name,
      displayName: gone.name,
      breed: breedName,
      gender: isBoy ? 'male' : 'female',
      genderLabel: isBoy ? 'Boy' : 'Girl',
      age: 'Joined family',
      status: 'gone',
      origin: {
        slug: 'imported',
        name: 'Imported'
      },
      breeds: [{ slug: breedName.toLowerCase().replace(/\s+/g, '-'), name: breedName }],
      cover: {
        id: 'cover-' + gone.slug,
        url: gone.mediaUrl,
        kind: 'image',
        width: 600,
        height: 700,
        alt: gone.alt || gone.name + ', ' + gone.meta,
        blurDataUrl: gone.blurDataUrl || null
      },
      media: [
        {
          id: 'media-' + gone.slug,
          url: gone.mediaUrl,
          kind: 'image',
          width: 600,
          height: 700,
          alt: gone.alt || gone.name + ', ' + gone.meta,
          blurDataUrl: gone.blurDataUrl || null
        }
      ]
    };
  }

  return null;
}

export function getAllPuppySlugs(): string[] {
  const slugs = new Set<string>();
  AVAILABLE_PUPPIES.forEach(p => slugs.add(p.slug));
  GONE_HOME_TICKETS.forEach(t => slugs.add(t.slug));
  return Array.from(slugs);
}

export function getNextPrevPuppies(slug: string): { prev: Puppy | null; next: Puppy | null } {
  const list = AVAILABLE_PUPPIES;
  const idx = list.findIndex(p => p.slug === slug);
  if (idx === -1) {
    const gIdx = GONE_HOME_TICKETS.findIndex(t => t.slug === slug);
    if (gIdx === -1) return { prev: null, next: null };
    const prevGone = GONE_HOME_TICKETS[(gIdx - 1 + GONE_HOME_TICKETS.length) % GONE_HOME_TICKETS.length];
    const nextGone = GONE_HOME_TICKETS[(gIdx + 1) % GONE_HOME_TICKETS.length];
    return {
      prev: getPuppyBySlug(prevGone.slug),
      next: getPuppyBySlug(nextGone.slug)
    };
  }
  const prevPup = list[(idx - 1 + list.length) % list.length];
  const nextPup = list[(idx + 1) % list.length];
  return {
    prev: prevPup,
    next: nextPup
  };
}
