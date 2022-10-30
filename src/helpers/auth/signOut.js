import { supabase } from "../../config/supabase.config";

export const signOut = async () => {
  await supabase.auth.signOut();
};
