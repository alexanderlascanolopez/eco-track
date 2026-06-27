import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = "https://uajuxkdzabtdkalfoemp.supabase.co";
const supabaseKey = "sb_publishable_tLBAIrS4lA3P60ilVXBEHQ_LYafO3OW";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
