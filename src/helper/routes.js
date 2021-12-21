import { lazy } from "react"

export const routes = [
    { id: 2, path: "/writeReview", component: lazy(() => import("../pages/reviewForm/WriteReview")), title: "Write a Review" },
    { id: 3, path: "/showReviews", component: lazy(() => import("../pages/reviews/ShowReviews")), title: "Show Reviews" },
    { id: 1, path: "/faq", component: lazy(() => import("../pages/faq/Faq")), title: "FAQ" },
    { id: 4, path: "/about", component: lazy(() => import("../pages/about/About")), title: "About" },
    { id: 5, path: "/", component: lazy(() => import("../pages/landingPage/LandingPage")) },
]