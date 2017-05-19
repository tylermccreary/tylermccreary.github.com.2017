interface Scripts {
   name: string;
   src: string;
}
export const ScriptStore: Scripts[] = [
   { name: 'core', src: 'https://api.filestackapi.com/filestack.js' },
   { name: 'service', src: 'http://js.api.here.com/v3/3.0/mapsjs-service.js' },
   { name: 'ui', src: 'http://js.api.here.com/v3/3.0/mapsjs-ui.js' },
   { name: 'mapevents', src: 'http://js.api.here.com/v3/3.0/mapsjs-mapevents.js' }
];
