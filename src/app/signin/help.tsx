import { TabsContent } from "@@components/tabs";

export const Help = () => (
  <TabsContent value="help" className="mx-3 h-[244px]">
    <div className=" w-[180px] py-3 text-[12px] text-neutral-400">
      Client IDs are provided by PayGen Provisioning Team. It adds another layer
      of security on top of authentication.
      <br />
      <br />
      For questions, please contact our support team.
      <br />
      <code className="text-neutral-300">hq@re-up.ph</code>
    </div>
  </TabsContent>
);
