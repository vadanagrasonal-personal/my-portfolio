"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"

/* ----------------------------- SKILLS DATA ----------------------------- */

const skillsData = [
  {
    name: "React",
    category: "Frontend",
    level: 80,
    color: "#61DAFB",
    position: [3.6, 0, 0],
    description:
      "Expert in modern React (18+) with Hooks, Context, Server Components, Suspense, code-splitting, and performance optimization. Building scalable component architectures with clean state management and seamless API integration.",
  },
  {
    name: "Laravel",
    category: "Backend",
    level: 100,
    color: "#FF2D20",
    position: [-3.6, 0, 0],
    description:
      "Advanced Laravel development with RESTful APIs, authentication (Sanctum), role-based access control, queues, caching, validation, and scalable architecture. Strong experience with performance optimization and secure backend systems.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 90,
    color: "#F7DF1E",
    position: [0, 2.8, 0],
    description:
      "Modern JavaScript (ES6+) expertise with async programming, modular architecture, API integration, and building high-performance interactive web applications.",
  },
  {
    name: "jQuery",
    category: "Frontend",
    level: 85,
    color: "#0769AD",
    position: [0, -2.8, 0],
    description:
      "Efficient DOM manipulation, animations, AJAX handling, form validation, and maintaining legacy systems with optimized performance.",
  },
  {
    name: "AJAX",
    category: "Frontend",
    level: 90,
    color: "#00BFFF",
    position: [2.5, 2.5, 0],
    description:
      "Asynchronous data loading, live filtering, pagination, real-time updates, and smooth UX without page reloads.",
  },
  {
    name: "WordPress",
    category: "CMS",
    level: 92,
    color: "#21759B",
    position: [-2.5, 2.5, 0],
    description:
      "Custom theme development, plugin customization, security hardening, speed optimization, and scalable CMS solutions.",
  },
  {
    name: "ACF (WordPress)",
    category: "CMS",
    level: 95,
    color: "#00A0D2",
    position: [-2.5, -2.5, 0],
    description:
      "Dynamic content modeling using Advanced Custom Fields, flexible layouts, reusable components, REST API integrations.",
  },
  {
    name: "MySQL",
    category: "Database",
    level: 98,
    color: "#4479A1",
    position: [2.5, -2.5, 0],
    description:
      "Relational database design, indexing, query optimization, migrations, performance tuning, and secure data management.",
  },
  {
    name: "Azure Blob",
    category: "Cloud",
    level: 80,
    color: "#0078D4",
    position: [-1.0, -0.170, -1.2],
    description:
      "Secure cloud file storage, scalable uploads, CDN delivery, backup management, and optimized retrieval workflows.",
  },
  {
    name: "Firebase",
    category: "Cloud",
    level: 90,
    color: "#FFCA28",
    position: [+2.0, 0, -2.0],
    description:
      "OTP authentication, push notifications, analytics, real-time services, and cloud-based integrations.",
  },
]

/* ----------------------------- SKILL ORB ----------------------------- */

function SkillOrb({ skill, onClick, isHovered }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.01

    const scale = isHovered ? 1.2 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
  })

  const size = (skill.level / 100) * 0.6 + 0.3

  return (
    <group position={skill.position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={isHovered ? 0.35 : 0.12}
          transparent
          opacity={0.9}
        />
      </mesh>

      <Text position={[0, -size - 0.4, 0]} fontSize={0.25} color="white" anchorX="center">
        {skill.name}
      </Text>
    </group>
  )
}

/* ----------------------------- FALLBACK GRID ----------------------------- */

function FallbackSkillsGrid({ skills, onSkillClick }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {skills.map((skill: any) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.05 }}
          onClick={() => onSkillClick(skill)}
          className="cursor-pointer rounded-lg border border-white/20 bg-white/5 p-4 text-center"
        >
          <div
            className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold"
            style={{ backgroundColor: skill.color + "30", color: skill.color }}
          >
            {skill.level}%
          </div>
          <h3 className="text-white font-semibold">{skill.name}</h3>
          <p className="text-white/60 text-sm">{skill.category}</p>
        </motion.div>
      ))}
    </div>
  )
}

/* ----------------------------- MAIN COMPONENT ----------------------------- */

export default function SkillWheel() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [hoveredSkill, setHoveredSkill] = useState<any>(null)
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl")
      if (!gl) setWebglSupported(false)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] bg-black rounded-xl overflow-hidden">
      {webglSupported ? (
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />

          {skillsData.map((skill) => (
            <SkillOrb
              key={skill.name}
              skill={skill}
              isHovered={hoveredSkill?.name === skill.name}
              onClick={() => setSelectedSkill(skill)}
              onPointerOver={() => setHoveredSkill(skill)}
            />
          ))}

          <OrbitControls enableZoom enablePan={false} />
        </Canvas>
      ) : (
        <FallbackSkillsGrid skills={skillsData} onSkillClick={setSelectedSkill} />
      )}

      {/* ------------------ SKILL DETAIL PANEL ------------------ */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl text-white font-bold">{selectedSkill.name}</h3>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-white/70 text-sm mb-2">{selectedSkill.category}</p>
            <p className="text-white/80 text-sm">{selectedSkill.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
