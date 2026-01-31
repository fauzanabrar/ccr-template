"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, GripVertical } from "lucide-react"

const boardData = [
    {
        title: "To Do",
        tasks: [
            { id: "1", title: "Implement Auth Flow", priority: "High", color: "text-rose-500 bg-rose-50" },
            { id: "2", title: "Design Landing Page", priority: "Medium", color: "text-amber-500 bg-amber-50" },
            { id: "3", title: "API Documentation", priority: "Low", color: "text-blue-500 bg-blue-50" },
        ]
    },
    {
        title: "In Progress",
        tasks: [
            { id: "4", title: "Database Migration", priority: "High", color: "text-rose-500 bg-rose-50" },
            { id: "5", title: "UI Kit Expansion", priority: "Medium", color: "text-amber-500 bg-amber-50" },
        ]
    },
    {
        title: "Done",
        tasks: [
            { id: "6", title: "Initial Repo Setup", priority: "Low", color: "text-blue-500 bg-blue-50" },
            { id: "7", title: "Deployment Pipeline", priority: "High", color: "text-rose-500 bg-rose-50" },
            { id: "8", title: "User Feedback Loop", priority: "Medium", color: "text-amber-500 bg-amber-50" },
        ]
    }
]

export default function KanbanPage() {
    return (
        <div className="h-full flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Project Board</h2>
                    <p className="text-muted-foreground">Manage tasks and track project progress across different stages.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> New Task
                </Button>
            </div>

            <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
                {boardData.map((column) => (
                    <div key={column.title} className="flex-shrink-0 w-80 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{column.title}</h3>
                                <Badge variant="secondary" className="rounded-full">
                                    {column.tasks.length}
                                </Badge>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex-1 flex flex-col gap-3 bg-muted/30 p-3 rounded-xl border border-dashed border-muted-foreground/20">
                            {column.tasks.map((task) => (
                                <Card key={task.id} className="cursor-pointer hover:shadow-md transition-all group">
                                    <CardContent className="p-4 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <Badge variant="outline" className={`font-normal border-none ${task.color}`}>
                                                {task.priority}
                                            </Badge>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <GripVertical className="h-3 w-3 text-muted-foreground" />
                                            </Button>
                                        </div>
                                        <p className="font-medium text-sm">{task.title}</p>
                                        <div className="flex items-center justify-between pt-2 border-t text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                            <span>Task ID: #{task.id}</span>
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                U
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground gap-2 h-10 border border-dashed border-muted-foreground/10">
                                <Plus className="h-4 w-4" /> Add Task
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
