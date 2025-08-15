import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the CleanSSR website.
 * This hook is designed to trigger animations based on the visibility of elements
 * and enhance user experience on the CleanSSR platform.
 * 
 * @returns {Object} - An object containing the animation state and a ref to attach to the element.
 */
export const useAnimation = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        ref,
        isVisible,
    };
};

/
 * Animation styles based on visibility for CleanSSR.
 * This function returns a CSS class name based on whether the element is visible.
 * 
 * @param {boolean} isVisible - The visibility state of the element.
 * @returns {string} - The class name for animation.
 */
export const getAnimationClass = (isVisible: boolean): string => {
    return isVisible ? 'animate-fadeIn' : 'hidden';
};