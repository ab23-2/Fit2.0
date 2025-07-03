// Initialize data structure if it doesn't exist
if (!localStorage.getItem('fitTrackData')) {
  const initialData = {
    clients: {
      'melissa@fitclient.com': {
        name: 'Melissa',
        programs: {
          currentWorkout: {
            name: "Fat Loss Program",
            startDate: "2023-06-01",
            endDate: "2023-07-27",
            type: "workout",
            workouts: {
              monday: "Bench Press - 3x5 RPE 7\nIncline DB Press - 3x8-12\nLat Pulldown - 3x8-12",
              tuesday: "Deadlift - 3x3 RPE 7\nRDL - 3x6-8\nLeg Press - 3x8-12",
              wednesday: "Comp Squat - 2x3 RPE 7\nFront Squat - 2x6-8 rir 1-2",
              thursday: "OHP - 3x5 RPE 7\nLateral Raises - 3x12-15",
              friday: "30-45 minutes of moderate cardio or active recovery",
              saturday: "Rest Day",
              sunday: "Rest Day"
            }
          },
          currentNutrition: {
            name: "Fat Loss Nutrition",
            type: "diet",
            nutrition: {
              calories: 2100,
              protein: 150,
              carbs: 200,
              fats: 70,
              water: 3
            }
          }
        },
        progress: []
      },
      'levan@fitclient.com': {
        name: 'Levan',
        programs: {
          currentWorkout: null,
          currentNutrition: null
        },
        progress: []
      }
    },
    coaches: {
      'coach@fitprogrees.com': {
        name: 'Coach',
        clients: ['melissa@fitclient.com', 'levan@fitclient.com']
      }
    }
  };
  localStorage.setItem('fitTrackData', JSON.stringify(initialData));
}

function getClientData(clientId) {
  const db = JSON.parse(localStorage.getItem('fitTrackData'));
  return db.clients[clientId];
}

function updateClientData(clientId, data) {
  const db = JSON.parse(localStorage.getItem('fitTrackData'));
  db.clients[clientId] = { ...db.clients[clientId], ...data };
  localStorage.setItem('fitTrackData', JSON.stringify(db));
}