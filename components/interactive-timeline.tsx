"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const timelineData = [
  {
    id: 1,
    year: "2024",
    title: "Full Stack Developer – City Management System",
    company: "Internal Project",
    location: "India",
    description:
      "Developed a comprehensive City Management System to manage zone and city-based accounts, products, consumption tracking, user contacts, and secure authentication with role-based access control and real-time reporting.",
    technologies: [
      "Laravel",
      "MySQL",
      "Firebase OTP",
      "REST API",
      "PDF Generation",
    ],
    achievements: [
      "Implemented role-based permissions for secure access control across multiple user roles.",
      "Built product and consumption modules with searchable and filterable dashboard reports.",
      "Designed user contact management with direct task assignment from contact details.",
      "Implemented worker role-based logic based on city account permissions.",
      "Integrated multi-authentication including email, mobile and Firebase OTP verification.",
      "Enabled PDF report downloads with advanced filtering and customization.",
      "Improved operational efficiency and data visibility for city administration.",
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "Laravel Developer – API Based Platform",
    company: "Internal Project",
    location: "India",
    description:
      "Developed a scalable Laravel-based platform with API integrations for user authentication, search, category content management, multimedia handling, real-time notifications, and secure data validation with a full-featured admin panel.",
    technologies: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "Firebase Notifications",
      "Firebase OTP",
      "Excel Import/Export",
      "Third-Party Validation",
    ],
    achievements: [
      "Built secure user registration and login APIs with Firebase OTP authentication.",
      "Integrated search API for fast and accurate retrieval of categories and content.",
      "Developed category modules containing question–answer data with video and image support.",
      "Implemented admin panel with full CRUD operations and multilingual language selection.",
      "Created dynamic slider module for showcasing images and videos.",
      "Enabled image upload and URL-based image control for flexible media management.",
      "Implemented Excel import/export functionality for bulk data processing.",
      "Integrated Firebase real-time notifications for user engagement and alerts.",
      "Applied third-party validation services to ensure data accuracy and integrity.",
      "Designed REST APIs for seamless frontend and third-party system integration.",
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "Laravel Developer – E-Commerce System",
    company: "Internal Project",
    location: "India",
    description:
      "Developed a comprehensive E-Commerce System with Laravel, enabling secure multi-authentication, product management, frontend search, multi-device login, role-based access, and advanced reporting features. Implemented full product CRUD, Excel import/export, PDF downloads, QR code generation, email scheduling, and status management for categories, subcategories, shapes, and products.",
    technologies: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "Excel Import/Export",
      "PDF Generation",
      "QR Code Integration",
      "Email Scheduling",
      "Multi-Authentication",
      "Role-Based Permissions"
    ],
    achievements: [
      "Implemented multi-authentication allowing login via email, social media, and mobile number.",
      "Managed product variants including sizes, colors, and quantities for flexible catalog options.",
      "Built frontend search API and filter API for quick, accurate product discovery.",
      "Enabled simultaneous login across 3 devices per user.",
      "Designed role-based permission system with allocation for admins, support, and users.",
      "Controlled product CRUD operations through role-specific permissions.",
      "Implemented Excel import/export for bulk product data management.",
      "Added PDF download functionality for product specifications and user manuals.",
      "Created on/off status actions for categories, subcategories, shapes, and products.",
      "Developed user module with registration, profile, order history, and address management.",
      "Generated QR codes for products to enhance mobile interaction and sales.",
      "Integrated scheduled email functionality with time limits for notifications and promotions."
    ],
    teamSize: 3,
    role: "Laravel Developer"
  },
  {
    id: 4,
    year: "2025",
    title: "Full Stack Developer – Stavya Spine Hospital ERP",
    company: "Internal Project",
    location: "India",
    description:
      "Designed and developed a comprehensive Hospital Management ERP for spine & orthopaedic specialty care. Digitized patient registration, OPD workflows, spine-specific clinical assessments, radiology & diagnostics automation, billing, inventory management, reporting, and role-based access with a modular Laravel + MySQL architecture. Integrated REST APIs, React frontend, and Blade templates for seamless operations across departments.",
    technologies: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "React",
      "Blade",
      "Bootstrap",
      "jQuery",
      "Role-Based Permissions",
      "Document Management",
      "Excel / PDF Reporting"
    ],
    achievements: [
      "Digitized end-to-end patient lifecycle from registration to follow-up, improving operational efficiency.",
      "Implemented advanced spine clinical assessments including ASIA, ODI, VAS scoring, and neurological mapping.",
      "Automated radiology workflows supporting MRI, X-Ray, DEXA with scheduling, reporting, and secure document management.",
      "Developed a robust billing engine handling consultations, procedures, radiology, partial payments, and tax calculations.",
      "Centralized inventory and material pricing with dynamic price calculations and stock tracking.",
      "Enabled role-based access control for doctors, admins, technicians, and front-office staff.",
      "Integrated structured reporting and dashboards for OPD analytics, clinical outcomes, and financial monitoring.",
      "Implemented secure document upload and versioning for patient records, reports, and consent forms.",
      "Optimized MySQL schema (200+ tables) for high-volume data integrity and query performance.",
      "Created reusable helpers for uploads, formatting, and audit logging across modules."
    ],
    teamSize: 3,
    role: "Full Stack Developer"
  },
  {
    id: 5,
    year: "2025",
    title: "Full Stack Developer – METIS Hospital Management System (HMS)",
    company: "Internal Project",
    location: "India",
    description:
      "Designed and developed a scalable Hospital Management System (HMS) supporting end-to-end hospital operations including patient registration, OPD/IPD workflows, appointment scheduling, billing, revenue sharing, insurance payments, bulk uploads, reporting, and secure role-based access using a normalized relational database architecture.",
    technologies: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "RBAC",
      "Bulk Data Processing",
      "Audit Logging",
      "Database Optimization",
      "Transactional Systems"
    ],
    achievements: [
      "Designed and implemented a relational database schema with 60+ normalized tables covering patients, doctors, billing, appointments, revenue sharing, authentication, and uploads.",
      "Built patient lifecycle workflows including registration, OPD visits, IPD admissions, discharge tracking, and service mapping.",
      "Developed appointment scheduling with doctor availability, time slots, leave management, and real-time status tracking.",
      "Implemented billing and transaction system supporting patient invoices, insurance payments, and upload-based bulk billing imports.",
      "Designed configurable doctor revenue sharing logic based on service groups, transaction types, and percentage rules.",
      "Implemented role-based access control using users, roles, permissions, and module mappings.",
      "Developed bulk upload module with validation, audit tracking, and error handling for large datasets.",
      "Integrated audit logging with created_by, updated_by, and soft deletes for full data traceability.",
      "Optimized database performance using indexing, foreign keys, and transactional consistency.",
      "Improved scalability using background job processing and cache tables."
    ],
    teamSize: 4,
    role: "Full Stack Developer"
  },
  {
    id: 6,
    year: "2025",
    title: "Full Stack Developer – 2Brain Business Operations System",
    company: "Internal Project",
    location: "India",
    description:
      "Designed and developed a centralized business operations and order management platform handling customers, materials, quotations, sales orders, purchase orders, vendors, contractors, production workflows, document management, and secure role-based access with scalable transactional architecture.",
    technologies: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "RBAC",
      "GST & Tax Calculations",
      "Order Lifecycle Management",
      "Document Storage",
      "Background Job Processing",
      "Caching",
      "Audit Logging"
    ],
    achievements: [
      "Designed normalized relational database architecture supporting customers, vendors, materials, pricing lists, contractors, and transactional workflows.",
      "Implemented structured sales flow from leads to quotations, sales orders, and detailed order line tracking with GST calculations.",
      "Developed production workflow assigning work to contractors with pricing rules, status tracking, and payout management.",
      "Built purchase order module managing supplier references, quantities, payment status, and completion tracking.",
      "Implemented document management system for storing files linked to business entities with audit history.",
      "Integrated role-based access control using users, roles, modules, and permission mappings.",
      "Implemented secure authentication with token-based sessions and activity tracking.",
      "Built attendance tracking and time-slot utilities for workforce monitoring.",
      "Improved performance using background job processing and caching strategies.",
      "Ensured transactional integrity, traceability, and scalability across all business operations."
    ],
    teamSize: 4,
    role: "Full Stack Developer"
  },
  {
    id: 7,
    year: "2025",
    title: "WordPress Developer – Biomatrix Content & Form Management Platform",
    company: "Internal Project",
    location: "India",
    description:
      "Designed and maintained a WordPress-based content and form management platform backed by a relational MySQL schema supporting structured content storage, taxonomy mapping, user management, background job processing, form transactions, and email diagnostics with extensible plugin architecture.",
    technologies: [
      "WordPress",
      "PHP",
      "MySQL",
      "WPForms",
      "Action Scheduler",
      "WP Mail SMTP",
      "REST APIs",
      "Plugin Development",
      "Database Normalization"
    ],
    achievements: [
      "Managed structured storage of posts, pages, media, metadata, and hierarchical taxonomies for flexible content organization and dynamic rendering.",
      "Implemented content relationships using taxonomy mapping and metadata tables to support extensible content attributes.",
      "Developed user management using users and user meta tables for authentication, profiles, and role configurations.",
      "Maintained threaded comments system with moderation tracking and metadata support.",
      "Configured centralized system settings using options table for runtime configuration without code changes.",
      "Integrated Action Scheduler for background job execution, retry handling, logging, and task monitoring.",
      "Managed transactional form data using WPForms tables including submissions, logs, payment records, and metadata.",
      "Tracked email delivery diagnostics using WP Mail SMTP tables for visibility into system-generated communications.",
      "Ensured database consistency, plugin interoperability, and data traceability following WordPress normalization standards.",
      "Optimized performance and scalability across high-content and high-form-transaction workloads."
    ],
    teamSize: 2,
    role: "WordPress Developer"
  },
  {
    id: 8,
    year: "2025",
    title: "WordPress Developer – Soham Hospital Management & Billing System",
    company: "Internal Project",
    location: "India",
    description:
      "Developed and maintained a WordPress-based Hospital Management and Billing System integrating patient inquiries, form submissions, appointment workflows, automated background tasks, secure online payments, user management, email diagnostics, and audit logging with a structured relational database architecture.",
    technologies: [
      "WordPress",
      "PHP",
      "MySQL",
      "WPForms",
      "Payment Gateway Integration",
      "Action Scheduler",
      "WP Mail SMTP",
      "Relational Database Design",
      "System Logging",
      "Performance Optimization"
    ],
    achievements: [
      "Designed and maintained normalized relational database schema supporting users, appointments, payments, forms, logs, and background job execution.",
      "Implemented secure patient inquiry and medical registration forms using WPForms with structured data storage.",
      "Integrated online payment gateway handling transaction lifecycle including subtotals, discounts, currencies, subscriptions, and payment metadata.",
      "Built automated task scheduling using Action Scheduler for background processing, retries, execution tracking, and logging.",
      "Managed role-based user authentication and metadata handling for hospital staff and administrators.",
      "Implemented email delivery tracking and debugging using WP Mail SMTP for transactional notifications.",
      "Optimized content and taxonomy management for hospital services, departments, and informational pages.",
      "Maintained audit logging and activity tracking for system events, form submissions, and scheduled tasks.",
      "Improved data integrity and performance using indexing, relational mapping, and normalized table design.",
      "Ensured scalability and reliability for high-volume form submissions and payment transactions."
    ],
    teamSize: 2,
    role: "WordPress Developer"
  },
  {
    id: 9,
    year: "2025",
    title: "Laravel Developer – Culture Crust Restaurant & Online Ordering Management System",
    company: "Internal Project",
    location: "India",
    description:
      "Developed a WordPress-based Restaurant and Online Ordering Management System enabling centralized order processing, payment handling, customer interaction forms, automated background jobs, email notifications, and role-based user management, supported by a structured relational database architecture.",
    technologies: [
      "Laravel",
      "MySQL",
      "Online Payment Gateway",
      "Action Scheduler",
      "SMTP Integration",
      "Dynamic Form Handling",
      "Role-Based Permissions",
      "Relational Database Design",
      "Audit Logging"
    ],
    achievements: [
      "Designed and maintained a normalized relational database supporting customers, menu items, orders, payments, notifications, and system logs.",
      "Implemented secure online payment processing with discounts, subtotal calculations, transaction metadata, and gateway integration.",
      "Built automated background jobs using Action Scheduler for order processing, notifications, and system maintenance tasks.",
      "Developed dynamic forms for customer inquiries, feedback, and order requests with structured data capture.",
      "Integrated email notifications with delivery tracking for order confirmations and customer communication using SMTP.",
      "Managed role-based authentication and permissions for admins and staff users.",
      "Optimized system performance using relational database design, normalized tables, and query optimization.",
      "Ensured data integrity and audit logging for transactions, orders, and user activities.",
      "Maintained scalable architecture for high-volume order handling and concurrent user interactions."
    ],
    teamSize: 3,
    role: "WordPress Developer"
  }


]

export default function InteractiveTimeline() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center 
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Content Card */}
            <div className={`w-full md:w-5/12 px-2 md:px-0 
              ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                className="cursor-pointer"
              >
                <Card className="glass-morphism border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>


                    <p className="text-white/70 mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Timeline Node */}
            <div className="relative z-10 my-4 md:my-0">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg"
              />
            </div>

            {/* Spacer */}
          <div className="hidden md:block md:w-5/12" />
          </motion.div>
        ))}
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-morphism rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {(() => {
                const item = timelineData.find((i) => i.id === selectedItem)
                if (!item) return null

                return (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/80 mb-6">{item.description}</p>

                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/10 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
