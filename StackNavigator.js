import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import EditNoteScreen from './screens/EditNoteScreen';
import DeletedNotesScreen from './screens/DeletedNotesScreen';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


export function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}
            options={{
                title:"Notes",
                headerTitleAlign:"center"
            }}
            />
            <Stack.Screen name='AddNote' component={AddNoteScreen}
            options={{
                title:"Add Note",
                headerTitleAlign:"center"
            }}
            />
            <Stack.Screen name='EditNote' component={EditNoteScreen}
            options={{
                title:"Edit Note",
                headerTitleAlign:"center"
            }}
            />
            <Stack.Screen name='DeletedNotes' component={DeletedNotesScreen}
            options={{
                title:"Deleted Notes",
                headerTitleAlign:"center"
            }}
            />
        </Stack.Navigator>
    )
}