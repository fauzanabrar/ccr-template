"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, Plus, Phone, Video, Info, MoreVertical, SearchIcon } from "lucide-react"

const contacts = [
    { id: 1, name: "Alice Johnson", status: "Online", avatar: "AJ", online: true, lastMsg: "See you tomorrow!", time: "10:45 AM" },
    { id: 2, name: "Bob Smith", status: "Offline", avatar: "BS", online: false, lastMsg: "How's the progress?", time: "9:30 AM" },
    { id: 3, name: "Charlie Davis", status: "Online", avatar: "CD", online: true, lastMsg: "Wait, let me check...", time: "Yesterday" },
    { id: 4, name: "Diana Prince", status: "Busy", avatar: "DP", online: true, lastMsg: "The designs are ready.", time: "Monday" },
]

export default function ChatPage() {
    return (
        <div className="h-[calc(100vh-8rem)] flex gap-6 overflow-hidden">
            {/* Contacts */}
            <Card className="w-80 flex flex-col overflow-hidden border shadow-sm bg-white/50 dark:bg-card/50 backdrop-blur-xl">
                <div className="p-4 border-b space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Chats</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search people..." className="pl-9 bg-background/50 h-9" />
                    </div>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-2 space-y-1">
                        {contacts.map((contact) => (
                            <div
                                key={contact.id}
                                className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors ${contact.id === 1 ? 'bg-primary/5' : ''}`}
                            >
                                <div className="relative">
                                    <Avatar className="h-10 w-10 border border-border">
                                        <AvatarFallback className="bg-gradient-to-tr from-primary/10 to-primary/20 text-primary font-bold">
                                            {contact.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    {contact.online && (
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-sm truncate">{contact.name}</span>
                                        <span className="text-[10px] text-muted-foreground">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">{contact.lastMsg}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </Card>

            {/* Conversation */}
            <Card className="flex-1 flex flex-col overflow-hidden border shadow-sm">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between bg-muted/20">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary/10 text-primary font-bold">AJ</AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Alice Johnson</h4>
                            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Active Now</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Phone className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Video className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Info className="h-4 w-4" /></Button>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <div className="bg-muted px-4 py-2 rounded-2xl rounded-tl-none max-w-[70%] text-sm">
                                Hey there! Have you seen the latest project update?
                                <div className="text-[10px] text-muted-foreground mt-1 text-right">10:42 AM</div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-none max-w-[70%] text-sm shadow-md">
                                Not yet, let me check it out. Is it in the repository?
                                <div className="text-[10px] text-primary-foreground/70 mt-1 text-right">10:44 AM</div>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-muted px-4 py-2 rounded-2xl rounded-tl-none max-w-[70%] text-sm">
                                Yes! I merged it this morning. See you tomorrow!
                                <div className="text-[10px] text-muted-foreground mt-1 text-right">10:45 AM</div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t bg-muted/10">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0 text-muted-foreground">
                            <Plus className="h-5 w-5" />
                        </Button>
                        <Input placeholder="Type a message..." className="h-11 bg-background/50 border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20" />
                        <Button size="icon" className="h-11 w-11 shrink-0 shadow-lg">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
