import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import userProfil from "../../../public/user-profil.jpg"
import arrowDown from "../../../public/icons/arrow-down.svg"

const Sidebar = () => {
  return (
    <div className='flex flex-row w-1/5 h-full'>
      <div className='w-full'>
        <div className="hidden md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Acme Inc</span>
              </Link>
            </div>
            <div className="flex-1">
              <div className='flex items-start px-5 pb-2'>
                <Input type="text" placeholder="Search" />
              </div>
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <h2 className='text-sidebar-title px-2 mt-6 mb-2 text-md'>Navigation</h2>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Client
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <Package className="h-4 w-4" />
                  Leads
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  Deals
                </Link>
                <h2 className='text-sidebar-title px-2 mt-6 mb-2 text-md'>Your lists</h2>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Inbound
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Outbound
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Ads
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2  mt-5 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Notifications
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">

                <CardContent className="p-2  md:p-4">
                  Deals
                  <Progress value={80} />
                  <p className='py-2'>5 Deals left from 30 Leads</p>
                  <Button size="sm" className="w-full">
                    Upgrade to pro
                  </Button>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-02-chunk-0 mt-2">
                <CardContent className="p-2 md:p-4 w-full ">
                  <DropdownMenu>
                    <DropdownMenuTrigger className='w-full flex flex-row items-center'>
                      <Image src={userProfil} width={50} height={50} alt="user profil" />
                      <div className='flex flex-col justify-center items-start text-left  ml-2'>
                        Arthur Bossuyt
                        Arthur@squared.studio
                      </div>
                      <Image src={arrowDown} width={20} height={20} alt="icon arowDown" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='relative right-0 w-56'>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className='cursor-pointer'>Profile</DropdownMenuItem>
                      <DropdownMenuItem className='cursor-pointer'>Billing</DropdownMenuItem>
                      <DropdownMenuItem className='cursor-pointer'>Team</DropdownMenuItem>
                      <DropdownMenuItem className='cursor-pointer'>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Sidebar;