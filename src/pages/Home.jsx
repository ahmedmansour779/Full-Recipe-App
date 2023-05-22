import { motion } from 'framer-motion'
import React from 'react'
import AboutUs from '../About Us/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'

export default function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Veggie />
            <Popular />
            <ContactUs />
            <AboutUs />
        </motion.div>
    )
}
