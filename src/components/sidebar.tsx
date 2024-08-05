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
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import userProfil from "../../public/user-profil.jpg"
import arrowDown from "../../public/icons/arrow-down.svg"
import HomeIcon from "../../public/icons/home.svg"
import ClientsIcon from "../../public/icons/client.svg"
import LeadsIcon from "../../public/icons/leads.svg"
import DealsIcon from "../../public/icons/deals.svg"
import InboundIcon from "../../public/icons/inbound.svg"
import OutboundIcon from "../../public/icons/outbound.svg"
import AdsIcon from "../../public/icons/ads.svg"
import NotificationsIcon from "../../public/icons/notifications.svg"
import SettingsIcon from "../../public/icons/settings.svg"
import UpgradeIcon from "../../public/icons/upgrade.svg"
import SearchIcon from "../../public/icons/search.svg"
import KblocIcon from "../../public/icons/kbloc.svg"
import Logo from "../../public/logo.svg"
import CarretDown from "../../public/icons/carret-down.svg"

const Sidebar = () => {
  return (
    <div className='flex flex-row w-1/5 max-w-[300px] min-w-[200px] h-full'>
      <div className='w-full'>
        <div className="hidden md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center lg:h-[60px]">
              <Image src={Logo} width={80} height={80} alt="Logo Society" />
              
            </div>
            <div className="flex-1">
            <div className='flex items-center px-5 pb-2 w-full relative'>
                <Image className="absolute ml-2" src={SearchIcon} width={20} height={20} alt="icon search" />
                <Input className="px-10 py-4" type="text" placeholder="Search" />
                <Image className="absolute right-6" src={KblocIcon} width={50} height={50} alt="icon keyboard" />

              </div>
              <nav className="grid items-start px-2 text-md font-medium lg:px-4">
                <h2 className='text-sidebar-title px-2 mt-2 mb-2 text-md'>Navigation</h2>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={HomeIcon} width={20} height={20} alt="icon home" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={ClientsIcon} width={20} height={20} alt="icon clients" />
                  Clients
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={LeadsIcon} width={20} height={20} alt="icon home" />
                  Leads
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary bg-white  transition-all hover:bg-muted"
                >
                  <Image src={DealsIcon} width={20} height={20} alt="icon Deals" />
                  Deals
                </Link>
                <h2 className='text-sidebar-title px-2 mt-4 mb-2 text-md'>Your lists</h2>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={InboundIcon} width={20} height={20} alt="icon inbound" />
                  Inbound
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={OutboundIcon} width={20} height={20} alt="icon outbound" />
                  Outbound
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={AdsIcon} width={20} height={20} alt="icon ads" />
                  Ads
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1  mt-5 text-primary transition-all hover:bg-muted"
                >
                  <Image src={NotificationsIcon} width={20} height={20} alt="icon notifications" />
                  Notifications
                  <Badge className="flex h-5 w-10 shrink-0 items-center justify-center rounded-md text-xs self-end">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-1 text-primary transition-all hover:bg-muted"
                >
                  <Image src={SettingsIcon} width={20} height={20} alt="icon settings" />
                  Settings
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardContent className="p-2 md:p-4">
                  <div className='flex flex-row items-center bold mb-4 font-bold'>
                    <Image className='mr-2' src={DealsIcon} width={18} height={18} alt="icon Deals" />
                    Deals
                  </div>
                  <Progress value={80} />
                  <p className='pt-2 pb-4 text-xs font-medium'>5 Deals left from 30 Leads</p>
                  <Button size="sm" className="w-full">
                    <Image className='mr-2'  src={UpgradeIcon} width={20} height={20} alt="icon home" />
                    Upgrade to pro
                  </Button>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-02-chunk-0 " className='mt-2'>
                <CardContent className="p-2 md:p-4 w-full ">
                  <DropdownMenu>
                    <DropdownMenuTrigger className='w-full flex flex-row items-center'>
                      <Image className='rounded-md' src={userProfil} width={50} height={50} alt="user profil" />
                      <div className='flex flex-col justify-center items-start text-left  ml-2 text-sm w-full text-ellipsis	overflow-hidden'>
                        Arthur Bossuyt
                        Arthur@squared.studio
                      </div>
                      <Image src={CarretDown} width={20} height={20} alt="icon arowDown" />
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