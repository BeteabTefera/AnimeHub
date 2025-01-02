import { createClient } from "@supabase/supabase-js";

const URL = "https://ophyphqkbluclbdimqfp.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waHlwaHFrYmx1Y2xiZGltcWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwNDA1MzIsImV4cCI6MTk5NzYxNjUzMn0.SEnEu8mza1-uCRepv1U1Wan-Yaa64Pc36456O08QxjQ"

export const supabase = createClient(URL, API_KEY);