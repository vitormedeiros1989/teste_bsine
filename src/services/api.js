export function loadLists() {
  return [
    { 
      title: 'Planejada', 
      creatable: true,
    },
    { 
      title: 'Executando', 
      creatable: false,      
    },
    { 
      title: 'Impasse', 
      creatable: false,      
    },
    { 
      title: 'Finalizada', 
      creatable: false,      
    },
  ];
}