"use client"
import Image from "next/image"

const technologies = [
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "React Native", icon: "/tech/react.svg" },
  { name: "Expo", icon: "/tech/expo.svg" },
  { name: "Firebase", icon: "/tech/firebase.svg" },
  { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
]

export function TechCarousel() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-[200%] flex">
        <div className="w-1/2 flex justify-around animate-scroll">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="mt-2 text-white text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex justify-around animate-scroll">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="mt-2 text-white text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 