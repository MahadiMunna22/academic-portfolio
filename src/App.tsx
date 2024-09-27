import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Mail,
  ExternalLink,
  Briefcase,
  Phone,
  Linkedin,
  ChevronRight,
  User,
  Rocket,
  ScrollText,
  Lightbulb,
  BriefcaseBusiness,
  AlignJustify,
  Building2Icon,
  BookOpenText, GraduationCap
} from "lucide-react";
import bg1 from './assets/bg1.jpg';
import ProfilePic from './assets/Munna.png'
import ml from './assets/ml.png';
import cv from './assets/cv.png';
import da from './assets/da.png';
import ux from './assets/ux.png';
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";

export default function App() {
  const [activeSection, setActiveSection] = useState('education')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 onClick={() => scrollToSection('about')} className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer">MD. MAHADI HASSAN MUNNA</h1>
          <div className="space-x-1 md:space-x-4 hidden lg:flex">
            {[
              { name: 'Education', icon: BookOpenText },
              { name: 'Projects', icon: Rocket },
              { name: 'Publications', icon: ScrollText },
              { name: 'Experience', icon: Briefcase },
              { name: 'Skills', icon: Lightbulb },
              { name: 'Contact', icon: Mail }
            ].map(({ name, icon: Icon }) => (
              <Button
                key={name.toLowerCase()}
                variant={activeSection === name.toLowerCase() ? "default" : "ghost"}
                onClick={() => scrollToSection(name.toLowerCase())}
                className="text-sm flex items-center"
              >
                <Icon className="mr-2 h-4 w-4" />
                {name}
              </Button>
            ))}
          </div>
          {/*<Button variant="outline" className="lg:hidden"><AlignJustify /></Button>*/}
          <Sheet>
            <SheetTrigger className="lg:hidden"><AlignJustify /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  {[
                    { name: 'About', icon: User },
                    { name: 'Education', icon: BookOpenText },
                    { name: 'Projects', icon: Rocket },
                    { name: 'Publications', icon: ScrollText },
                    { name: 'Experience', icon: Briefcase },
                    { name: 'Skills', icon: Lightbulb },
                    { name: 'Contact', icon: Mail }
                  ].map(({ name, icon: Icon }) => (
                      <Button
                          key={name.toLowerCase()}
                          variant={activeSection === name.toLowerCase() ? "default" : "ghost"}
                          onClick={() => scrollToSection(name.toLowerCase())}
                          className="text-sm flex items-center w-full justify-start"
                      >
                        <Icon className="mr-4 h-4 w-4" />
                        {name}
                      </Button>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center">
                <User className="mr-2 h-8 w-8 text-primary"/>
                Mahadi Hassan Munna
              </h2>
              <p className="text-lg md:text-xl mb-6 text-gray-600">AI and ML Enthusiastic | Computer Science
                Engineer</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">AI</Badge>
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">Machine Learning</Badge>
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">Human Computer Interaction</Badge>
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">Computer Vision</Badge>
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">Natural Language
                  Processing</Badge>
                <Badge variant="secondary" className="text-sm md:text-base py-1 px-2">Data Science</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="default" className="flex items-center text-sm"
                        onClick={() => scrollToSection('projects')}>
                  View Projects <ChevronRight className="ml-1 h-4 w-4"/>
                </Button>
                <Button variant="outline" className="flex items-center text-sm" onClick={() => window.open('https://drive.google.com/file/d/1P08v26_oCLBUjDeg3MYYeKJjGF2Sy7ln/view?usp=sharing')}>
                  Download CV <FileText className="ml-1 h-4 w-4"/>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <div className="relative">
                <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-white shadow-lg me-0 md:me-10">
                  <AvatarImage src={ProfilePic} alt="MD. MAHADI HASSAN MUNNA"/>
                  <AvatarFallback>MHM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mb-12 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <BookOpenText className="mr-2 h-8 w-8 text-primary"/>
            Education
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-500 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <GraduationCap className="mr-4 h-6 w-4"/>
                  Military Institute of Science and Technology (MIST)
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center"><Building2Icon
                    className="mr-4 h-4 w-4"/> Dhaka, Bangladesh</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">FEB 2017 - APR 2021</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Bachelor in Computer Science and Engineering (CSE)</li>
                  <li>GPA: 3.70/4.00</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-fuchsia-700 to-purple-600 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <GraduationCap className="mr-4 h-4 w-4"/>
                  Fashiladanga College
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center"><Building2Icon
                    className="mr-4 h-4 w-4"/> Dinajpur, Bangladesh</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">JUN 2014 - AUG 2016</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Higher Secondary Certificate (H.S.C)</li>
                  <li>GPA: 5.00/5.00</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-400 to-zinc-500 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <GraduationCap className="mr-4 h-4 w-4"/>
                  Saint Philip’s High School and College
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center">
                  <Building2Icon className="mr-4 h-4 w-4"/>
                  Dinajpur, Bangladesh
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">Dinajpur, Bangladesh</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Dinajpur, Bangladesh</li>
                  <li>GPA: 5.00/5.00</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="mb-12 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Rocket className="mr-2 h-8 w-8 text-primary"/>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img src={bg1} alt="Hospital Cabin Management System" className="w-full h-48 object-cover"/>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Hospital Cabin Management System</CardTitle>
                <CardDescription className="text-sm">Empowering the Disabled Through Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs">Image Classification</Badge>
                  <Badge className="text-xs">YOLO V4</Badge>
                  <Badge className="text-xs">Voice-to-Text</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img src={bg1} alt="Nose Mobile Interaction System" className="w-full h-48 object-cover"/>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Nose Mobile Interaction System</CardTitle>
                <CardDescription className="text-sm">Award-Winning Innovation for Accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs">Machine Learning</Badge>
                  <Badge className="text-xs">Computer Vision</Badge>
                  <Badge className="text-xs">Android</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="publications"
                 className="mb-12 py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <ScrollText className="mr-2 h-8 w-8 text-primary"/>
            Notable Publications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="text-lg md:text-xl flex items-center">
                  <FileText className="mr-4 h-10 w-10"/>
                  Multimodal Interaction system for bedridden and immobile hospital-admitted patients
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 text-end">Springer Link, 2022</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  This groundbreaking study presents a novel approach to improving the quality of life for bedridden
                  patients enabling them to interact with their surroundings through advanced AI and multimodal
                  interaction techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Yolo v4</Badge>
                  <Badge variant="secondary">HCI</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                </div>
                <Button onClick={() => window.open("https://link.springer.com/article/10.1186/s12913-022-08095-y")}
                        variant="outline" size="sm" className="w-full">
                  Read Full Paper <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <CardTitle className="text-lg md:text-xl flex items-center">
                  <FileText className="mr-4 h-10 w-10"/>
                  Hands-Free Mobile Interaction Technique utilizing nose and teeth movement
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 text-end">IEEExplore, 2021</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  This innovative research introduces a unique method for hands-free mobile device interaction, opening
                  new possibilities for users with physical disabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Mobile</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">HCI</Badge>
                </div>
                <Button onClick={() => window.open("https://ieeexplore.ieee.org/abstract/document/9399435")}
                        variant="outline" size="sm" className="w-full">
                  Read Full Paper <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-800 to-red-500 text-white">
                <CardTitle className="text-lg md:text-xl flex items-center">
                  <FileText className="mr-4 h-10 w-10"/>
                  Hospital Cabin Management System utilizing brain-computer interaction
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 text-end">Springer Link, 2020</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  This innovative research introduces a system where an EEG headset collects data to interpret a
                  patient's thoughts using an artificial neural network, enabling severely ill or disabled patients to
                  control their surroundings in hospital cabins, especially in understaffed settings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Brain Computer Interaction</Badge>
                  <Badge variant="secondary">ANN</Badge>
                  <Badge variant="secondary">HCI</Badge>
                </div>
                <Button onClick={() => window.open("https://link.springer.com/chapter/10.1007/978-3-030-71187-0_20")}
                        variant="outline" size="sm" className="w-full">
                  Read Full Paper <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="mb-12 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Briefcase className="mr-2 h-8 w-8 text-primary"/>
            Professional Journey
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-400 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <BriefcaseBusiness className="mr-4 h-4 w-4"/>
                  Assistant Software Engineer
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center"><Building2Icon
                    className="mr-4 h-4 w-4"/> IDLC Finance Ltd</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">AUG 2022 - PRESENT</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Developed Fintech solutions</li>
                  <li>Improved software stability</li>
                  <li>Collaborated using Git</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <BriefcaseBusiness className="mr-4 h-4 w-4"/>
                  Junior Frontend Engineer
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center"><Building2Icon
                    className="mr-4 h-4 w-4"/> Autoby24</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">APR 2021 - JUL 2022</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Built ride-sharing app</li>
                  <li>Designed custom libraries</li>
                  <li>Integrated RESTful APIs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <CardTitle className="text-base md:text-lg flex items-center">
                  <BriefcaseBusiness className="mr-4 h-4 w-4"/>
                  Intern
                </CardTitle>
                <CardDescription className="text-sm text-gray-100 flex items-center">
                  <Building2Icon className="mr-4 h-4 w-4"/>
                  BanglaTel LTD
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-xs md:text-sm text-gray-600">DEC 2019 - JAN 2020</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>Learned networking basics</li>
                  <li>Studied IGW, ITC, IIG, ICX</li>
                  <li>Gained industry exposure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="mb-12 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Lightbulb className="mr-2 h-8 w-8 text-primary"/>
            Technical Expertise
          </h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 md:mb-1">
              <TabsTrigger value="languages" className="text-sm">Languages</TabsTrigger>
              <TabsTrigger value="frameworks" className="text-sm">Frameworks</TabsTrigger>
              <TabsTrigger value="tools" className="text-sm">Tools</TabsTrigger>
              <TabsTrigger value="others" className="text-sm">Specialties</TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  {
                    name: 'Python',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  },
                  {
                    name: 'C++',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
                  },
                  {name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
                  {
                    name: 'JavaScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  },
                  {name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'},
                  {
                    name: 'Assembly',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
                  },
                ].map((lang) => (
                    <Card key={lang.name} className="flex flex-col items-center justify-center p-4">
                      <img src={lang.icon} alt={`${lang.name} logo`} className="w-12 h-12 mb-2"/>
                      <p className="text-xs md:text-sm text-center">{lang.name}</p>
                    </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="frameworks">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  {name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                  {
                    name: 'Node.js',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                  },
                  {
                    name: 'TensorFlow',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
                  },
                  {
                    name: 'PyTorch',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
                  },
                  {
                    name: 'Flutter',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
                  },
                  {
                    name: 'Android Studio',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
                  },
                ].map((framework) => (
                    <Card key={framework.name} className="flex flex-col items-center justify-center p-4">
                      <img src={framework.icon} alt={`${framework.name} logo`} className="w-12 h-12 mb-2"/>
                      <p className="text-xs md:text-sm text-center">{framework.name}</p>
                    </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  {name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
                  {
                    name: 'Docker',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                  },
                  {name: 'AWS', icon: 'https://d3gih7jbfe3jlq.cloudfront.net/AWS-Podcast-Title-Art.jpg'},
                  {
                    name: 'Firebase',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
                  },
                  {name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
                  {
                    name: 'MongoDB',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                  },
                ].map((tool) => (
                    <Card key={tool.name} className="flex flex-col items-center justify-center p-4">
                      <img src={tool.icon} alt={`${tool.name} logo`} className="w-12 h-12 mb-2"/>
                      <p className="text-xs md:text-sm text-center">{tool.name}</p>
                    </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="others">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {name: 'Machine Learning', icon: ml},
                  {name: 'Computer Vision', icon: cv},
                  {name: 'Data Analysis', icon: da},
                  {name: 'UI/UX Design', icon: ux}
                ].map((specialty) => (
                    <Card key={specialty?.name} className="flex flex-col items-center justify-center p-4">
                      <img src={specialty?.icon} alt={`${specialty?.name} icon`} className="w-16 h-16 mb-2"/>
                      <p className="text-xs md:text-sm text-center">{specialty?.name}</p>
                    </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="contact" className="mb-12 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Mail className="mr-2 h-8 w-8 text-primary"/>
            Get in Touch
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button title="mahadimunna22@gmail.com" variant="outline" className="flex flex-col items-center justify-center h-24 md:h-32 transition-all duration-300 hover:shadow-lg" onClick={() => window.open("mailto:mahadimunna22@gmail.com")}>
              <Mail className="h-6 w-6 md:h-8 md:w-8 mb-2"/>
              <span className="text-xs md:text-sm text-center">Email</span>
            </Button>
            <Button title="+8801521426787" variant="outline" className="flex flex-col items-center justify-center h-24 md:h-32 transition-all duration-300 hover:shadow-lg" onClick={() => window.open("tel:+8801521426787")}>
              <Phone className="h-6 w-6 md:h-8 md:w-8 mb-2"/>
              <span className="text-xs md:text-sm text-center">Phone</span>
            </Button>
            <Button title="https://www.linkedin.com/in/mahadi-hassan-munna-55ba9a141/" variant="outline" className="flex flex-col items-center justify-center h-24 md:h-32 transition-all duration-300 hover:shadow-lg" onClick={() => window.open("https://www.linkedin.com/in/mahadi-hassan-munna-55ba9a141/")}>
              <Linkedin className="h-6 w-6 md:h-8 md:w-8 mb-2"/>
              <span className="text-xs md:text-sm text-center">LinkedIn</span>
            </Button>
            <Button title="https://github.com/MahadiMunna22" variant="outline" className="flex flex-col items-center justify-center h-24 md:h-32 transition-all duration-300 hover:shadow-lg" onClick={() => window.open("https://github.com/MahadiMunna22")}>
              <GitHubLogoIcon className="h-6 w-6 md:h-8 md:w-8 mb-2"/>
              <span className="text-xs md:text-sm text-center">GitHub</span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2023 MD. MAHADI HASSAN MUNNA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}