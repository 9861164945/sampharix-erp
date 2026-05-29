import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { UserPlus, Users, LogIn } from "lucide-react";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Header with Branding */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Sampharix Logo" 
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-blue-600">Sampharix ERP</h1>
        </div>
        <Button className="bg-blue-600 text-white">
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Welcome to Sampharix ERP
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg">
          Your complete business management system for distributors, retailers, and inventory control.
        </p>
      </section>

      {/* Main Actions Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {/* Distributor Apply */}
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer border-blue-200">
          <CardContent className="p-8 text-center">
            <Users className="mx-auto mb-4 text-blue-600" size={40} />
            <h2 className="text-xl font-semibold">Apply for Distributor</h2>
            <p className="text-gray-500 text-sm mt-2">
              Become a distributor and manage multiple retailers under you.
            </p>
            <Button className="mt-5 bg-blue-600 text-white w-full">
              Apply Now
            </Button>
          </CardContent>
        </Card>

        {/* Retailer Apply */}
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer border-green-200">
          <CardContent className="p-8 text-center">
            <UserPlus className="mx-auto mb-4 text-green-600" size={40} />
            <h2 className="text-xl font-semibold">Apply for Retailer</h2>
            <p className="text-gray-500 text-sm mt-2">
              Join as a retailer and start selling products easily.
            </p>
            <Button className="mt-5 bg-green-600 text-white w-full">
              Apply Now
            </Button>
          </CardContent>
        </Card>

        {/* Login */}
        <Card className="rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer border-gray-200">
          <CardContent className="p-8 text-center">
            <LogIn className="mx-auto mb-4 text-gray-700" size={40} />
            <h2 className="text-xl font-semibold">Login</h2>
            <p className="text-gray-500 text-sm mt-2">
              Access your dashboard and manage your business.
            </p>
            <Button className="mt-5 w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t">
        <p className="text-gray-500">© 2026 Sampharix ERP. All rights reserved Sambit Kumar Swain.</p>
      </footer>
    </div>
  );
};

export default HomePage;
