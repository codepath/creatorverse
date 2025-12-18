import { createClient } from '@supabase/supabase-js';

const URL = 'https://dhkzlhezspqtupcdgtlx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoa3psaGV6c3BxdHVwY2RndGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMjI0MTgsImV4cCI6MjA4MTU5ODQxOH0.mznedbRFi1O6pVcvEfYUjsaZN66YD3K4Z336QSWbSWU';

export const supabase = createClient(URL, API_KEY);