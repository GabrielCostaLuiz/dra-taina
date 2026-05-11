import { ReactNode } from "react";
import { GradientSection } from "../ui/GradientSection";


interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    gradient?: 'top' | 'bottom' | 'both' | 'none';
    showGrid?: boolean;
    variant?: 'white' | 'primary';
}

export default function Section({
    id,
    children,
    className,
    variant = 'white',
    gradient = 'none',
    showGrid = false,
}: SectionProps) {

    const variantBackground = {
        white: 'bg-white',
        primary: 'bg-surface',
    }

    return (
        <section
            id={id}
            className={`relative py-32 ${className} ${variantBackground[variant]}`}
        >
            {/* Geometric Background Elements */}
            {showGrid && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.04] -translate-y-2"
                        style={{ backgroundImage: `linear-gradient(to right, #6b5c4a 1px, transparent 1px), linear-gradient(to bottom, #6b5c4a 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
                    </div>


                    {/* <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div> */}

                    {/* Floating Line Accents */}
                    <div className="absolute top-1/3 left-10 w-px h-32 bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
                </div>
            )}

            {/* Gradients using GradientSection */}
            {(gradient === 'top' || gradient === 'both') && (
                <GradientSection direction="to-t" />
            )}
            {(gradient === 'bottom' || gradient === 'both') && (
                <GradientSection direction="to-b" />
            )}

            <div className="relative z-10">
                {children}
            </div>

        </section>
    );
}
