import { useLocation } from "react-router";

export default function useActiveRoute(paths) {
    const location = useLocation();
    const chacker = paths.some(path => (location.pathname == path))
    return chacker
}