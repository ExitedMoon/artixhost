import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Wallet, Plus, Tag, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Finance = () => {
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const lastOperations = [
    // Placeholder data - empty for now
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 pt-24 px-6 pb-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-foreground">Finance</h1>
              
              {/* Balance Block */}
              <div className="glass-card p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Wallet className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Balance</p>
                      <p className="text-3xl font-bold text-foreground">€0.00</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="glass" 
                      className="rounded-xl"
                      onClick={() => setIsTopUpOpen(true)}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Top Up
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-xl"
                      onClick={() => setIsPromoOpen(true)}
                    >
                      <Tag className="mr-2 h-4 w-4" />
                      Activate Promocode
                    </Button>
                  </div>
                </div>
              </div>

              {/* Last Operations */}
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Last Operations</h2>
                
                {lastOperations.length === 0 ? (
                  <div className="text-center py-8">
                    <ArrowUpRight className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                    <p className="text-muted-foreground">No operations yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {lastOperations.map((op: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-3">
                          {op.type === "topup" ? (
                            <ArrowDownLeft className="h-5 w-5 text-green-500" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5 text-red-500" />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{op.description}</p>
                            <p className="text-sm text-muted-foreground">{op.date}</p>
                          </div>
                        </div>
                        <p className={`font-semibold ${op.type === "topup" ? "text-green-500" : "text-red-500"}`}>
                          {op.type === "topup" ? "+" : "-"}€{op.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Top Up Modal */}
      <Dialog open={isTopUpOpen} onOpenChange={setIsTopUpOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Top Up Balance</DialogTitle>
            <DialogDescription>
              Add funds to your account balance
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (EUR)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {["5", "10", "25", "50"].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-lg"
                  onClick={() => setTopUpAmount(amount)}
                >
                  €{amount}
                </Button>
              ))}
            </div>
            <Button variant="glass" className="w-full rounded-xl">
              <Plus className="mr-2 h-4 w-4" />
              Proceed to Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Promocode Modal */}
      <Dialog open={isPromoOpen} onOpenChange={setIsPromoOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Activate Promocode</DialogTitle>
            <DialogDescription>
              Enter your promocode to get bonus credits
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="promo">Promocode</Label>
              <Input
                id="promo"
                placeholder="Enter promocode"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <Button variant="glass" className="w-full rounded-xl">
              <Tag className="mr-2 h-4 w-4" />
              Activate
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
};

export default Finance;
