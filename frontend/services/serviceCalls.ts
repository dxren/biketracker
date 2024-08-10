export type Workout = {
  type: string;
  duration?: number;
  distance?: string;
  notes?: string;
};

export const handlePostWorkout = (
  type: string,
  duration: number,
  distance: number,
  notes: string
): Workout => {
  //hands a Workout blob over to the server at serverURL + /workout
};
