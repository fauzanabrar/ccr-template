"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal, Download, UserPlus } from "lucide-react"

const customers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", spent: "$1,200.00", orders: 12, avatar: "AJ" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive", spent: "$450.00", orders: 5, avatar: "BS" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", status: "Active", spent: "$2,800.00", orders: 24, avatar: "CD" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", status: "Active", spent: "$3,500.00", orders: 30, avatar: "DP" },
    { id: 5, name: "Edward Norton", email: "edward@example.com", status: "Banned", spent: "$0.00", orders: 0, avatar: "EN" },
]

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Customer Management</h2>
                    <p className="text-muted-foreground">View and manage your client database and their activity.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" /> Export
                    </Button>
                    <Button className="gap-2">
                        <UserPlus className="h-4 w-4" /> Add Customer
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-md">
                <CardHeader className="bg-muted/10 px-6 py-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="relative w-full md:max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search customers..." className="pl-9 h-10 bg-background" />
                        </div>
                        <Button variant="ghost" className="gap-2 h-10 border border-muted-foreground/10 bg-background hover:bg-muted/50">
                            <Filter className="h-4 w-4" /> Filter
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table className="min-w-[800px]">
                            <TableHeader className="bg-muted/5">
                                <TableRow>
                                    <TableHead className="w-[80px] px-6 py-4">Avatar</TableHead>
                                    <TableHead className="px-6 py-4">Customer</TableHead>
                                    <TableHead className="px-6 py-4">Status</TableHead>
                                    <TableHead className="text-right px-6 py-4">Orders</TableHead>
                                    <TableHead className="text-right px-6 py-4">Total Spent</TableHead>
                                    <TableHead className="w-[50px] px-6 py-4"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {customers.map((customer) => (
                                    <TableRow key={customer.id} className="group hover:bg-muted/20 transition-colors border-b-muted/50">
                                        <TableCell className="px-6 py-4">
                                            <Avatar className="h-10 w-10 border border-border shadow-sm">
                                                <AvatarFallback className="bg-primary/5 text-primary text-[10px] font-bold">
                                                    {customer.avatar}
                                                </AvatarFallback>
                                            </Avatar>
                                        </TableCell>
                                        <TableCell className="px-6 py-4">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="font-bold text-sm text-foreground">{customer.name}</span>
                                                <span className="text-xs text-muted-foreground">{customer.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-6 py-4">
                                            <Badge variant="outline" className={`font-bold uppercase tracking-wider text-[9px] border-none px-2.5 py-0.5 ${customer.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' :
                                                customer.status === 'Inactive' ? 'bg-amber-500/10 text-amber-500' :
                                                    'bg-rose-500/10 text-rose-500'
                                                }`}>
                                                {customer.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right font-medium text-sm px-6 py-4">{customer.orders}</TableCell>
                                        <TableCell className="text-right font-bold text-sm text-primary px-6 py-4">{customer.spent}</TableCell>
                                        <TableCell className="px-6 py-4">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
