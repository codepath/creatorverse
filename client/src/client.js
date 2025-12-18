import { createClient } from '@supabase/supabase-js';

const URL = 'https://dhkzlhezspqtupcdgtlx.supabase.co';
const API_KEY = 'sb_publishable_WUyHk-KOoz3840O75tVvkw_dYoJPTJe';

export const supabase = createClient(URL, API_KEY);