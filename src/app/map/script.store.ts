interface Scripts {
   name: string;
   src: string;
}
export const ScriptStore: Scripts[] = [
   { name: 'core', src: 'https://js.api.here.com/v3/3.0/mapsjs-core.js' },
   { name: 'service', src: 'https://js.api.here.com/v3/3.0/mapsjs-service.js' },
   { name: 'ui', src: 'https://js.api.here.com/v3/3.0/mapsjs-ui.js' },
   { name: 'mapevents', src: 'https://js.api.here.com/v3/3.0/mapsjs-mapevents.js' }
];
