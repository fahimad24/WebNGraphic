import { usePathname, useRouter } from "next/navigation";

const useSetPath = () => {
    const pathname = usePathname();
    const router = useRouter();
    const setPath = (path: string,action: string) => {
       router.push(`${pathname}?${path}=${action}`, { scroll: false });
    }
    return {setPath};
};

export default useSetPath;