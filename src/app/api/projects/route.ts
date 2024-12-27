// app/api/projects/route.ts
import { NextResponse } from 'next/server';

interface Project {
  id: string;
  name: string;
  description: string;
  hasToken: string;
  track: string[];
  githubUrl: string;
  twitterUrl: string;
  websiteUrl: string;
}

export async function GET() {
  const SHEET_URL = process.env.GOOGLE_SHEET_URL;
  const sheetId = SHEET_URL?.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1];
  const gid = '0';

  try {
    const apiUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${gid}`;
    const response = await fetch(apiUrl);
    const text = await response.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    
    const projects = json.table.rows.map((row: any) => {
      const tracks = row.c[3]?.v ? row.c[3].v.split(',').map((t: string) => t.trim()) : [];
      if (row.c[2]?.v === 'Yes') {
        tracks.push('Solana Agent Kit');
      }
      
      return {
        id: row.c[0]?.v || '',
        name: row.c[0]?.v || '',
        description: row.c[1]?.v || '',
        hasToken: row.c[2]?.v || '',
        track: tracks,
        githubUrl: row.c[4]?.v || '',
        twitterUrl: row.c[5]?.v || '',
        websiteUrl: row.c[6]?.v || ''
      };
    }).filter((project: Project) => project.name && project.name !== '');

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}