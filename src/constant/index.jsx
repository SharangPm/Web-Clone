import {
  FaHouse,
  FaBell,
  FaEnvelope,
  FaSlash,
  FaXTwitter,
  FaRegBookmark,
  FaMoneyBill1,
  FaEarthAfrica,
  FaUserPlus,
  FaListUl,
  FaBan,
  FaChartLine,
  FaCode,
  FaFlag,
  FaCommentDots,
} from "react-icons/fa6";
import {
  FaSearch,
  FaUser,
  FaMicrophone,
  FaCog,
  FaPaintBrush,
  FaRegSmile,
  FaAt,
  FaQuestionCircle,
  FaVolumeMute,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BsLightning } from "react-icons/bs";
import { PiDotsThreeCircle, PiPersonSimpleCircleLight } from "react-icons/pi";
import { RiFileListLine, RiListOrdered2 } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { RiBarChartFill } from "react-icons/ri";
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { LuCalendarClock, LuBadgeCheck } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
export const sidebarLinks = [
  {
    id: 1,
    icon: FaHouse,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    icon: FaSearch,
    text: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    icon: FaBell,
    text: "Notifications",
    notification: 3,
    path: "/notifications",
  },
  {
    id: 4,
    icon: FaEnvelope,
    text: "Messages",
  },
  {
    id: 5,
    icon: FaSlash,
    text: "Grok",
  },
  {
    id: 6,
    icon: FaRegBookmark,
    text: "Bookmarks",
  },
  {
    id: 6,
    icon: IoPeople,
    text: "Communities",
  },
  {
    id: 7,
    icon: FaXTwitter,
    text: "Premium",
  },
  {
    id: 8,
    icon: BsLightning,
    text: "Verified Orgs",
  },
  {
    id: 9,
    icon: FaUser,
    text: "Profile",
  },
  {
    id: 10,
    icon: PiDotsThreeCircle,
    text: "More",
  },
];

export const morePopoverLinks = [
  {
    id: 1,
    icon: RiFileListLine,
    text: "Lists",
  },
  {
    id: 2,
    icon: FaRegBookmark,
    text: "Bookmarks",
  },
  {
    id: 3,
    icon: FaMoneyBill1,
    text: "Monetization",
  },
  {
    id: 4,
    icon: BsBoxArrowUpRight,
    text: "Ads",
  },
  {
    id: 5,
    icon: MdBusinessCenter,
    text: "Jobs",
  },
  {
    id: 6,
    icon: FaMicrophone,
    text: "Create your Space",
  },
  {
    id: 7,
    icon: FaCog,
    text: "Settings and Privacy",
    path: "/settings",
  },
];

export const trendTopics = [
  {
    id: 1,
    category: "Sports · Trending",
    title: "Ferdi Kadıoğlu",
    posts: 6865,
  },
  {
    id: 2,
    category: "Turkish Super Lig · Trending",
    title: "Muslera",
    posts: 5149,
  },
  {
    id: 3,
    category: "Technology · Trending",
    title: "iPhone 15 Release",
    posts: 8920,
  },
  {
    id: 4,
    category: "Music · Trending",
    title: "Taylor Swift's New Album",
    posts: 10234,
  },
  { id: 5, category: "Movies · Trending", title: "Dune Part Two", posts: 7890 },
  {
    id: 6,
    category: "Politics · Trending",
    title: "Climate Change Summit",
    posts: 4521,
  },
  {
    id: 7,
    category: "Fashion · Trending",
    title: "Paris Fashion Week",
    posts: 6432,
  },
  {
    id: 8,
    category: "Health · Trending",
    title: "Mediterranean Diet Benefits",
    posts: 3840,
  },
  {
    id: 9,
    category: "Gaming · Trending",
    title: "Elden Ring DLC",
    posts: 7329,
  },
  {
    id: 10,
    category: "Finance · Trending",
    title: "Bitcoin Price Surge",
    posts: 9587,
  },
];

export const whoToFollow = [
  {
    id: 1,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/830/100/100.jpg?hmac=OR3tgiXGeiyB2_hcTonA43nlYWGy8qXPBuKWIu114so",
  },
  {
    id: 2,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/823/100/100.jpg?hmac=rrXXdm-D50pC_p2q92_pCEdzuWbfC4iUTbZ-VyD-rUk",
    verified: true,
  },
  {
    id: 3,
    username: "cemwebdev.com",
    fullName: "CemWebDev",
    avatar:
      "https://fastly.picsum.photos/id/156/100/100.jpg?hmac=W2gdtalDBjTq0AEJwUyKNN0QwlSCOL1RnR0XS3G_uAE",
  },
];

export const trendsFooterLinks = [
  {
    id: 1,
    text: "Terms of Service",
    path: "/explore",
  },
  {
    id: 2,
    text: "Privacy Policy",
    path: "/",
  },
  {
    id: 3,
    text: "Cookie Policy",
    path: "/",
  },
  {
    id: 4,
    text: "Imprint",
    path: "/",
  },
  {
    id: 5,
    text: "Accessibility",
    path: "/",
  },
  {
    id: 6,
    text: "Ads info",
    path: "/",
  },
  {
    id: 7,
    text: "More...",
  },
];

export const footerPopoverLinks = [
  { id: 1, text: "About", path: "/" },
  { id: 2, text: "Download the X app", path: "/" },
  { id: 3, text: "X for business", path: "/" },
  { id: 4, text: "Developers", path: "/" },
];

export const settingsLinks = [
  { id: 1, text: "Your account", href: null },
  { id: 2, text: "Monetization", href: null },
  { id: 3, text: "Premium", href: null },
  { id: 4, text: "Creator Subscriptions", href: null },
  { id: 5, text: "Security and account access", href: null },
  { id: 6, text: "Privacy and safety", href: null },
  { id: 7, text: "Notifications", href: null },
  { id: 8, text: "Accessibility, display, and languages", href: "display" },
  { id: 9, text: "Additional resources", href: null },
  { id: 10, text: "Help Center", href: null },
];

export const displayLinks = [
  {
    id: 1,
    title: "Accessibility",
    subtitle:
      "Manage aspects of your X experience such as limiting color contrast and motion.",
    icon: IoEyeOff,
  },
  {
    id: 2,
    title: "Display",
    subtitle:
      "Manage your font size, color, and background. These settings affect all the X accounts on this browser.",
    icon: FaPaintBrush,
    path: "appearance",
  },
  {
    id: 3,
    title: "Languages",
    subtitle:
      "Manage which languages are used to personalize your X experience.",
    icon: BiWorld,
  },
  {
    id: 4,
    title: "Data usage",
    subtitle:
      "Limit how X uses some of your network data. These settings affect all the X accounts on this browser.",
    icon: RiBarChartFill,
  },
  {
    id: 5,
    title: "Keyboard shortcuts",
    subtitle: "Learn the available keyboard shortcuts for easier navigation.",
    icon: PiPersonSimpleCircleLight,
  },
];

export const colors = [
  {
    primary: "#3b82f6",
    secondary: "#8ecdf8",
  },
  {
    primary: "#ffd400",
    secondary: "#ffea80",
  },
  {
    primary: "#f91880",
    secondary: "#fc8cc0",
  },
  {
    primary: "#7856ff",
    secondary: "#bcabff",
  },
  {
    primary: "#ff7a00",
    secondary: "#ffbd80",
  },
  {
    primary: "#00ba7c",
    secondary: "#80ddbe",
  },
];

export const fontSizes = [14, 15, 16, 17, 18];

export const headerIcons = [
  { id: 1, icon: <CiImageOn /> },
  { id: 2, icon: <HiOutlineGif /> },
  { id: 3, icon: <RiListOrdered2 /> },
  { id: 4, icon: <FaRegSmile /> },
  { id: 5, icon: <LuCalendarClock /> },
  { id: 6, icon: <CiLocationOn /> },
];

export const replyPopover = [
  { id: 1, text: "Everyone", icon: FaEarthAfrica },
  { id: 2, text: "Accounts you follow", icon: FiUserCheck },
  { id: 3, text: "Verified accounts", icon: LuBadgeCheck },
  { id: 4, text: "Only accounts you mention", icon: FaAt },
];

export const mockPosts = [
  {
    username: "John Doe",
    handle: "@john_doe",
    content:
      "Morning coffee and a quick workout! ☕💪 #morningroutine #fitness",
    image: "https://picsum.photos/600/400?random=1",
    profileImage: "https://i.pravatar.cc/150?img=1",
    likes: 300,
    retweets: 150,
    comments: 29876,
    views: 1234569,
    time: 120,
    verified: true,
  },
  {
    username: "Sarah Lee",
    handle: "@sarahlee",
    content: "Had an amazing weekend hike with friends! 🌲🏞️ #nature #hiking",
    image: "https://picsum.photos/600/400?random=2",
    profileImage: "https://i.pravatar.cc/150?img=2",
    likes: 2200,
    retweets: 320,
    comments: 150,
    views: 123333,
    time: 235,
  },
  {
    username: "Mark Jacobs",
    handle: "@markj",
    content:
      "Just finished reading 'The Alchemist'. Highly recommend! 📖✨ #readinglist #bookworm",
    image: "https://picsum.photos/600/400?random=3",
    profileImage: "https://i.pravatar.cc/150?img=3",
    likes: 800,
    retweets: 120,
    comments: 12890,
    views: 12765234,
    time: 845,
    verified: true,
  },
  {
    username: "Emily Clark",
    handle: "@emilyc",
    content: "Trying out a new pasta recipe tonight 🍝😋 #foodie #dinnerideas",
    image: "https://picsum.photos/600/400?random=4",
    profileImage: "https://i.pravatar.cc/150?img=4",
    likes: 1900,
    retweets: 240,
    comments: 110,
    views: 4532,
    time: 210,
  },
  {
    username: "Daniel King",
    handle: "@danielking",
    content:
      "Caught a beautiful sunset at the beach today 🌅 #sunsetlovers #relax",
    image: "https://picsum.photos/600/400?random=5",
    profileImage: "https://i.pravatar.cc/150?img=5",
    likes: 1300,
    retweets: 170,
    comments: 90,
    views: 30567,
    time: 2345,
  },
];

export const postPopoverItems = (username) => [
  {
    id: 1,
    text: "Why this ad?",
    icon: FaQuestionCircle,
  },
  {
    id: 2,
    text: `Follow ${username}`,
    icon: FaUserPlus,
  },
  {
    id: 3,
    text: `Add/remove ${username} from Lists`,
    icon: FaListUl,
  },
  {
    id: 4,
    text: `Mute ${username}`,
    icon: FaVolumeMute,
  },
  {
    id: 5,
    text: `Block ${username}`,
    icon: FaBan,
  },
  {
    id: 6,
    text: "View post engagements",
    icon: FaChartLine,
  },
  {
    id: 7,
    text: "Embed post",
    icon: FaCode,
  },
  {
    id: 8,
    text: "Report ad",
    icon: FaFlag,
  },
  {
    id: 9,
    text: "Request Community Note",
    icon: FaCommentDots,
  },
];

export const notificationData = [
  {
    id: 1,
    username: "John Doe",
    profileImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    username: "Ember Claw",
    profileImage: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    username: "Tam Frain",
    profileImage: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    username: "Hester Sek",
    profileImage: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    username: "Indiana Degrenier",
    profileImage: "https://i.pravatar.cc/150?img=5",
  },
];

export const trendsForYou = [
  {
    id: 1,
    category: "Sports · Trending",
    title: "Galatasaray",
    posts: 12000,
  },
  {
    id: 2,
    category: "Technology · Trending",
    title: "Tesla",
    posts: 8500,
  },
  {
    id: 3,
    category: "Entertainment · Trending",
    title: "Netflix",
    posts: 20000,
  },
  {
    id: 4,
    category: "Music · Trending",
    title: "Edis",
    posts: 15300,
  },
  {
    id: 5,
    category: "Business · Trending",
    title: "Amazon",
    posts: 9000,
  },
];

export const exploreTrending = [
  { id: 1, category: "Sports · Trending", title: "Galatasaray", posts: 12500 },
  { id: 2, category: "Technology · Trending", title: "Tesla", posts: 8500 },
  {
    id: 3,
    category: "Entertainment · Trending",
    title: "Netflix",
    posts: 20000,
  },
  { id: 4, category: "Music · Trending", title: "Edis", posts: 15300 },
  { id: 5, category: "Business · Trending", title: "Amazon", posts: 9000 },
  { id: 6, category: "Fashion · Trending", title: "Beymen", posts: 4500 },
  {
    id: 7,
    category: "Education · Trending",
    title: "Üniversite Kayıtları",
    posts: 7800,
  },
  {
    id: 8,
    category: "Health · Trending",
    title: "COVID-19 Aşısı",
    posts: 16000,
  },
  { id: 9, category: "Travel · Trending", title: "Kapadokya", posts: 12300 },
  {
    id: 10,
    category: "Gaming · Trending",
    title: "League of Legends",
    posts: 18900,
  },
  { id: 11, category: "Food · Trending", title: "Nusret", posts: 14300 },
  {
    id: 12,
    category: "Books · Trending",
    title: "Sabahattin Ali",
    posts: 9000,
  },
  { id: 13, category: "Movies · Trending", title: "Dune Part 2", posts: 22000 },
  { id: 14, category: "Sports · Trending", title: "Fenerbahçe", posts: 11800 },
  { id: 15, category: "Music · Trending", title: "Hadise", posts: 14200 },
  {
    id: 16,
    category: "Technology · Trending",
    title: "Apple Event",
    posts: 12000,
  },
  { id: 17, category: "Fashion · Trending", title: "Mavi Jeans", posts: 6100 },
  { id: 18, category: "Travel · Trending", title: "Bodrum", posts: 8900 },
  {
    id: 19,
    category: "Movies · Trending",
    title: "Mission: Impossible",
    posts: 17500,
  },
  {
    id: 20,
    category: "Health · Trending",
    title: "Vegan Beslenme",
    posts: 5000,
  },
  { id: 21, category: "Sports · Trending", title: "Formula 1", posts: 16000 },
  { id: 22, category: "Technology · Trending", title: "ChatGPT", posts: 12300 },
  {
    id: 23,
    category: "Entertainment · Trending",
    title: "Kardeşlerim",
    posts: 9800,
  },
  { id: 24, category: "Music · Trending", title: "Tarkan", posts: 19500 },
  { id: 25, category: "Books · Trending", title: "Orhan Pamuk", posts: 6400 },
  { id: 26, category: "Gaming · Trending", title: "Valorant", posts: 17800 },
  {
    id: 27,
    category: "Business · Trending",
    title: "Hepsiburada",
    posts: 7300,
  },
  {
    id: 28,
    category: "Movies · Trending",
    title: "Avatar: The Way of Water",
    posts: 22200,
  },
  { id: 29, category: "Food · Trending", title: "Çiğ Köfte", posts: 8300 },
  { id: 30, category: "Fashion · Trending", title: "LC Waikiki", posts: 6800 },
];

export const newsTrends = [
  {
    id: 1,
    category: "Trending in Technology",
    title: "AI Revolution",
    posts: 9321,
  },
  {
    id: 2,
    category: "Trending in Business & Finance",
    title: "Stock Market Surge",
    posts: 1543,
  },
  {
    id: 3,
    category: "Trending in Technology",
    title: "Quantum Computing",
    posts: 10456,
  },
  { id: 4, category: "Trending", title: "#NewTech2024", posts: 32167 },
  {
    id: 5,
    category: "Trending in Business & Finance",
    title: "Crypto Regulation",
    posts: 8742,
  },
  { id: 6, category: "Trending", title: "SpaceX Launch", posts: 67234 },
  {
    id: 7,
    category: "Trending in Technology",
    title: "5G Expansion",
    posts: 12099,
  },
  {
    id: 8,
    category: "Trending in Business & Finance",
    title: "Fintech Startups",
    posts: 5093,
  },
  { id: 9, category: "Trending", title: "#HealthTech", posts: 23741 },
  {
    id: 10,
    category: "Trending in Technology",
    title: "Cybersecurity Advances",
    posts: 18067,
  },
];

export const globalSportsTrends = [
  {
    id: 1,
    category: "Trending in Sports",
    title: "Ronaldo",
    posts: 185000,
  },
  {
    id: 2,
    category: "Trending in Basketball",
    title: "LeBron James",
    posts: 120000,
  },
  {
    id: 3,
    category: "Trending in Sports",
    title: "Serena Williams",
    posts: 78000,
  },
  {
    id: 4,
    category: "Trending in Tennis",
    title: "Wimbledon",
    posts: 56000,
  },
  {
    id: 5,
    category: "Trending in Formula 1",
    title: "Lewis Hamilton",
    posts: 103000,
  },
  {
    id: 6,
    category: "Trending in Sports",
    title: "Usain Bolt",
    posts: 34000,
  },
  {
    id: 7,
    category: "Trending in Golf",
    title: "Tiger Woods",
    posts: 91000,
  },
  {
    id: 8,
    category: "Trending in Football",
    title: "Messi",
    posts: 195000,
  },
  {
    id: 9,
    category: "Trending in NBA",
    title: "Stephen Curry",
    posts: 85000,
  },
  {
    id: 10,
    category: "Trending in Cricket",
    title: "Virat Kohli",
    posts: 47000,
  },
  {
    id: 11,
    category: "Trending in Sports",
    title: "Tokyo Olympics",
    posts: 56000,
  },
  {
    id: 12,
    category: "Trending in Rugby",
    title: "New Zealand All Blacks",
    posts: 39000,
  },
  {
    id: 13,
    category: "Trending in Sports",
    title: "Roger Federer",
    posts: 125000,
  },
  {
    id: 14,
    category: "Trending in UFC",
    title: "Conor McGregor",
    posts: 112000,
  },
  {
    id: 15,
    category: "Trending in Motorsports",
    title: "MotoGP",
    posts: 67000,
  },
];

export const entertainmentTrends = [
  {
    id: 1,
    category: "Trending in Entertainment",
    title: "Avatar3",
    posts: 105000,
  },
  {
    id: 2,
    category: "Trending in Music",
    title: "Adele",
    posts: 87500,
  },
  {
    id: 3,
    category: "Trending in Movies",
    title: "John Wick",
    posts: 62000,
  },
  {
    id: 4,
    category: "Trending in K-pop",
    title: "BLACKPINK",
    posts: 155000,
  },
  {
    id: 5,
    category: "Trending in Fashion & Beauty",
    title: "Met Gala",
    posts: 132000,
  },
  {
    id: 6,
    category: "Trending in Entertainment",
    title: "The Witcher",
    posts: 45000,
  },
  {
    id: 7,
    category: "Trending in Music",
    title: "BTS",
    posts: 235000,
  },
  {
    id: 8,
    category: "Trending in Music",
    title: "Taylor Swift",
    posts: 175000,
  },
  {
    id: 9,
    category: "Trending in TV Shows",
    title: "Stranger Things",
    posts: 78000,
  },
  {
    id: 10,
    category: "Trending in Entertainment",
    title: "#Oscars2024",
    posts: 210000,
  },
  {
    id: 11,
    category: "Trending in Fashion",
    title: "Gucci",
    posts: 63000,
  },
  {
    id: 12,
    category: "Trending in Entertainment",
    title: "Zendaya",
    posts: 95000,
  },
  {
    id: 13,
    category: "Trending in Entertainment",
    title: "#GameOfThrones",
    posts: 115000,
  },
  {
    id: 14,
    category: "Trending in Music",
    title: "Drake",
    posts: 145000,
  },
  {
    id: 15,
    category: "Trending in TV Shows",
    title: "The Mandalorian",
    posts: 98000,
  },
];
