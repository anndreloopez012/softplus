import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, X } from "lucide-react";
import { usePWA } from "@/hooks/usePWA";
import { useState } from "react";

export const PWAInstaller = () => {
  const { isInstallable, installApp } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <Card className="fixed bottom-4 right-4 z-50 max-w-sm bg-card/95 backdrop-blur-xl border-border animate-slide-in">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Instalar SoftPlus GT</h3>
              <p className="text-xs text-muted-foreground">Acceso rápido en tu dispositivo</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDismissed(true)}
            className="h-6 w-6 p-0"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button
            size="sm"
            onClick={installApp}
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Download className="w-3 h-3 mr-1" />
            Instalar
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setDismissed(true)}
            className="flex-1"
          >
            Después
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};