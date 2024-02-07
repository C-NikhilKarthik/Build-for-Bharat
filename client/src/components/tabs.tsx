import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Tab() {
  const [merchantID, setMerchantID] = useState("");
  const [pinCodes, setPinCodes] = useState("");

  const handleAddMerchant = () => {
    // Split the pin codes into an array
    const pinCodesArray = pinCodes.split(",").map((code) => code.trim());

    // Handle adding merchant with merchantID and pinCodesArray
    console.log("Merchant ID:", merchantID);
    console.log("Pin Codes:", pinCodesArray);
    // Add your logic to save the data or perform other actions
  };

  return (
    <Tabs defaultValue="check" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="check">Check PinCode</TabsTrigger>
        <TabsTrigger value="add">Add Merchant</TabsTrigger>
      </TabsList>
      <TabsContent value="check">
        <Card>
          <CardHeader>
            <CardTitle>Check PinCode</CardTitle>
            <CardDescription>
              Enter the PinCode to check the Merchants Available.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="pinCode">PinCode</Label>
              <Input id="pinCode" placeholder="580009" type="number" />
            </div>

            <Button>Check PinCodes</Button>
            <div className="w-full p-0 md:px-10">
              <div className="w-full aspect-square bg-slate-500/30 rounded border-2 border-dashed border-slate-100"></div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="add">
        <Card>
          <CardHeader>
            <CardTitle>Add Merchant</CardTitle>
            <CardDescription>
              Add a Merchant by adding their MerchantID and PinCodes they
              deliver to.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="merchantID">Merchant ID</Label>
              <Input
                id="merchantID"
                type="text"
                value={merchantID}
                onChange={(e) => setMerchantID(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pinCodes">Pin Codes (comma-separated)</Label>
              <Input
                id="pinCodes"
                type="text"
                placeholder="560001,560002...."
                value={pinCodes}
                onChange={(e) => setPinCodes(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddMerchant}>Add Merchant</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
