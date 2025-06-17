import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function LoadingSpinner({ size = "md", color = "text-dande-primary" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} ${color} border-2 border-current border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

// Advanced loading animation with tech theme
export function TechLoadingAnimation() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-3 h-3 bg-dande-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );
}

// Network connection loading animation
export function NetworkLoadingAnimation() {
  return (
    <div className="relative w-16 h-16">
      {/* Central node */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-dande-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
      
      {/* Orbiting nodes */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-dande-primary/60 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "0 0"
          }}
          animate={{
            rotate: 360,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }
          }}
          initial={{
            x: 24,
            y: -2,
            rotate: index * 90
          }}
        />
      ))}
    </div>
  );
}