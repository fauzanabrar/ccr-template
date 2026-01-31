"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layers, MousePointer2, Box } from "lucide-react"

export default function PrimitivesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">UI Primitives</h2>
                    <p className="text-muted-foreground">The foundational building blocks of our design system.</p>
                </div>
            </div>

            <Tabs defaultValue="buttons" className="space-y-6">
                <TabsList className="bg-muted/50 p-1 border">
                    <TabsTrigger value="buttons" className="gap-2"><MousePointer2 className="h-4 w-4" /> Interaction</TabsTrigger>
                    <TabsTrigger value="badges" className="gap-2"><Layers className="h-4 w-4" /> Identification</TabsTrigger>
                    <TabsTrigger value="cards" className="gap-2"><Box className="h-4 w-4" /> Containment</TabsTrigger>
                </TabsList>

                <TabsContent value="buttons" className="space-y-6">
                    <Card className="border-none shadow-md overflow-hidden">
                        <CardHeader className="bg-muted/10">
                            <CardTitle>Button Variants</CardTitle>
                            <CardDescription>Core interactive elements with different semantic meanings.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-10 space-y-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
                                <div className="flex flex-col items-center gap-4">
                                    <Button>Default</Button>
                                    <span className="text-[10px] font-bold uppercase opacity-30 tracking-widest">Primary</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <Button variant="secondary">Secondary</Button>
                                    <span className="text-[10px] font-bold uppercase opacity-30 tracking-widest">Neutral</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <Button variant="outline">Outline</Button>
                                    <span className="text-[10px] font-bold uppercase opacity-30 tracking-widest">Ghosted</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <Button variant="ghost">Ghost</Button>
                                    <span className="text-[10px] font-bold uppercase opacity-30 tracking-widest">Invisible</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <Button variant="destructive">Destructive</Button>
                                    <span className="text-[10px] font-bold uppercase opacity-30 tracking-widest">Danger</span>
                                </div>
                            </div>

                            <div className="p-8 bg-zinc-950 rounded-2xl relative group border border-zinc-800">
                                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                                    <Code className="h-4 w-4 text-emerald-500" />
                                </div>
                                <pre className="text-emerald-500/80 font-mono text-xs overflow-x-auto leading-relaxed">
                                    {`<Button variant="primary">Submit</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>`}
                                </pre>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="badges" className="space-y-6">
                    <Card className="border-none shadow-md overflow-hidden">
                        <CardHeader className="bg-muted/10">
                            <CardTitle>Status Indicators</CardTitle>
                            <CardDescription>Badges and tags for metadata and status representation.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-10 space-y-12">
                            <div className="flex flex-wrap gap-6 items-center justify-center">
                                <Badge>Stable</Badge>
                                <Badge variant="secondary">In Review</Badge>
                                <Badge variant="outline" className="border-blue-500 text-blue-500">Feature</Badge>
                                <Badge variant="destructive">Urgent</Badge>
                                <Badge className="bg-emerald-500 hover:bg-emerald-600 border-none shadow-md">Completed</Badge>
                                <Badge className="bg-indigo-500 hover:bg-indigo-600 border-none shadow-md">Architecture</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="cards" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 h-24 w-24 bg-primary/10 rounded-full blur-2xl" />
                            <CardHeader>
                                <CardTitle>Featured Card</CardTitle>
                                <CardDescription>High emphasis container with shadows and borders.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm opacity-70 leading-relaxed">
                                Used for primary calls to action or emphasizing specific dashboard metrics. Supports complex layouts and interactions.
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-sm bg-muted/20">
                            <CardHeader>
                                <CardTitle>Subtle Card</CardTitle>
                                <CardDescription>Low emphasis container for supporting content.</CardDescription>
                            </CardHeader>
                            <CardContent className="text-sm opacity-50 leading-relaxed">
                                Ideal for secondary information, documentation snippets, or background elements that shouldn't grab attention.
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
