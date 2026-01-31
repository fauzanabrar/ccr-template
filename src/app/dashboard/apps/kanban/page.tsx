"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, GripVertical, Trash2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Task = {
    id: string;
    title: string;
    priority: "High" | "Medium" | "Low";
    color: string;
}

type Column = {
    title: string;
    tasks: Task[];
}

const initialBoardData: Column[] = [
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
    const [board, setBoard] = useState(initialBoardData);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [activeColumn, setActiveColumn] = useState("");
    const [taskToDelete, setTaskToDelete] = useState<{ colTitle: string, taskId: string } | null>(null);

    // Form states
    const [newTitle, setNewTitle] = useState("");
    const [newPriority, setNewPriority] = useState<"High" | "Medium" | "Low">("Medium");

    const handleAddTask = () => {
        if (!newTitle.trim()) {
            toast.error("Please enter a task title");
            return;
        }

        const priorityColors = {
            High: "text-rose-500 bg-rose-50",
            Medium: "text-amber-500 bg-amber-50",
            Low: "text-blue-500 bg-blue-50",
        };

        const newTask: Task = {
            id: Math.floor(Math.random() * 1000).toString(),
            title: newTitle,
            priority: newPriority,
            color: priorityColors[newPriority]
        };

        setBoard(prev => prev.map(col =>
            col.title === activeColumn
                ? { ...col, tasks: [...col.tasks, newTask] }
                : col
        ));

        toast.success(`Task added to ${activeColumn}`);
        setIsAddDialogOpen(false);
        setNewTitle("");
        setNewPriority("Medium");
    }

    const handleDeleteTask = () => {
        if (!taskToDelete) return;

        setBoard(prev => prev.map(col =>
            col.title === taskToDelete.colTitle
                ? { ...col, tasks: col.tasks.filter(t => t.id !== taskToDelete.taskId) }
                : col
        ));

        toast.success("Task deleted successfully");
        setIsDeleteDialogOpen(false);
        setTaskToDelete(null);
    }

    return (
        <div className="h-full flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Project Board</h2>
                    <p className="text-muted-foreground">Manage tasks and track project progress across different stages.</p>
                </div>
                <Button className="gap-2" onClick={() => { setActiveColumn("To Do"); setIsAddDialogOpen(true); }}>
                    <Plus className="h-4 w-4" /> New Task
                </Button>
            </div>

            <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
                {board.map((column) => (
                    <div key={column.title} className="flex-shrink-0 w-80 flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2 text-start">
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
                                            <div className="flex gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                                                    onClick={() => { setTaskToDelete({ colTitle: column.title, taskId: task.id }); setIsDeleteDialogOpen(true); }}
                                                >
                                                    <Trash2 className="h-3 w-3" />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <GripVertical className="h-3 w-3 text-muted-foreground" />
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="font-medium text-sm text-start">{task.title}</p>
                                        <div className="flex items-center justify-between pt-2 border-t text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                            <span>Task ID: #{task.id}</span>
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                U
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-muted-foreground hover:text-foreground gap-2 h-10 border border-dashed border-muted-foreground/10"
                                onClick={() => { setActiveColumn(column.title); setIsAddDialogOpen(true); }}
                            >
                                <Plus className="h-4 w-4" /> Add Task
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Task Dialog */}
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                        <DialogDescription>Create a new task to be added to {activeColumn}.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2 text-start">
                            <Label htmlFor="title">Task Title</Label>
                            <Input
                                id="title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder="e.g. Implement search functionality"
                            />
                        </div>
                        <div className="grid gap-2 text-start">
                            <Label htmlFor="priority">Priority</Label>
                            <Select
                                value={newPriority}
                                onValueChange={(val: any) => setNewPriority(val)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleAddTask}>Create Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Task</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this task? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleDeleteTask}>Delete Task</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
