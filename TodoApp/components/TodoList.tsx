import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TodoProps, TodoType } from '../App';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
    list:{
        flex: 1,
    },
    separator:{
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});

export default function TodoList({todos, onToggle, onRemove}:any) {
    return (
        <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.list}
            data={todos}
            renderItem={({item}) => (
                <TodoItem 
                    id={item.id} 
                    text={item.text} 
                    done={item.done}
                    onToggle={onToggle}
                    onRemove={onRemove} 
                />
            )}
            keyExtractor={item => item?.id?.toString()}
        >

        </FlatList>
    )
}