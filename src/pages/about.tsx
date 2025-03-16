
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ScrollArea } from "../components/ui/scroll-area"
import { Info, Shield, FileText } from 'lucide-react'
import { Button } from "../components/ui/button"
import OptimizedImage from "../components/ui/OptimizedImage"
import logoImage from '../Images/Logo/logo-placeholder.svg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <OptimizedImage src={logoImage} alt="InventoryAI Logo" width={40} height={40} />               
          <span className="text-2xl font-bold text-blue-600">InventoryAI</span>
        </div>
        <nav className="hidden md:flex space-x-6">
        <Link to ='/Homepage'>
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          </Link>
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <Link to = '/pricing'>
          <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
          </Link>
          <Link to = '/about'>
          <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
          </Link>
          <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
 
        <Link to="/login">  
            <Button> Get Started</Button>
        </Link>

      </header>
      <h1 className="text-3xl font-bold mb-6">About Inevntory Pro</h1>

      <Tabs defaultValue="about-us" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about-us">About Us</TabsTrigger>
          <TabsTrigger value="privacy-policy">Privacy Policy</TabsTrigger>
        </TabsList>

        <TabsContent value="about-us">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </CardTitle>
              <CardDescription>Our mission, vision, and team information</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full pr-4">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At InventoryPro, our mission is to empower businesses of all sizes with cutting-edge inventory management solutions. We strive to simplify complex inventory processes, enhance efficiency, and drive growth for our clients through innovative technology and exceptional service.
                </p>

                <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
                <p className="mb-4">
                  We envision a world where businesses can seamlessly manage their inventory, making informed decisions that lead to sustainable growth and success. Our goal is to be the global leader in inventory management solutions, known for our reliability, innovation, and customer-centric approach.
                </p>

                <h2 className="text-xl font-semibold mb-4">Our Team</h2>
              
                <ul className="list-disc pl-6 mb-4">
                  <li>Mohammed Miqdhadh CP</li>
                  <li>Mahammad Sayad</li>
                </ul>
                <p>
                  Together, we're committed to delivering exceptional inventory management solutions and support to businesses worldwide.
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy-policy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Privacy Policy
              </CardTitle>
              <CardDescription>Our data protection and privacy practices</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full pr-4">
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, company information, and inventory data.
                </p>

                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
                </p>

                <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>

                <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
                <p className="mb-4">
                  You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
                </p>

            
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}