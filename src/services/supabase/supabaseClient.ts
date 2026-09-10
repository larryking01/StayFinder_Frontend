import { createClient } from "@supabase/supabase-js"; 





const stayFinderProjectUrl = import.meta.env.VITE_STAYFINDER_PROJECT_URL 
const stayFinderPublishableKey = import.meta.env.VITE_STAYFINDER_PUBLISHABLE_KEY


if (!stayFinderProjectUrl) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}


if (!stayFinderPublishableKey) {
  throw new Error('PUBLISHABLE KEY is missing');
}


export const supabaseClient = createClient(
    stayFinderProjectUrl,
    stayFinderPublishableKey,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true
        }
    }
)



// test superbase client connection to the database
// async function test() {
//   const { data, error } = await supabaseClient
//     .from('Hotels')
//     .select('*');

//   console.log({ data, error });
// }

// test();

