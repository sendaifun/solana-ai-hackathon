// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function GET() {
  const SHEET_URL = process.env.GOOGLE_SHEET_URL;
  const sheetId = SHEET_URL?.match(/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1];
  
  if (!sheetId) {
    return NextResponse.json({ error: 'Invalid sheet URL' }, { status: 400 });
  }

  try {
    const apiUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
    const response = await fetch(apiUrl);
    const csvData = await response.text();
    
    const parsedData = await new Promise((resolve) => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const projects = results.data.map((row: any) => ({
            id: row.name,
            name: row.name,
            image: row.image_url,
            track: row.tracks.split(',').map((t: string) => t.trim()),
            description: row.description,
            githubUrl: row.github_url,
            websiteUrl: row.website_url,
            team: row.team,
            twitterUrl: row.twitter_url,
            submissionUrl: row.submission_url
          }));
          resolve(projects);
        }
      });
    });

    return NextResponse.json(parsedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}