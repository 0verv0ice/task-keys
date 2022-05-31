import { IItem } from './index';
import { ListItem } from './ListItem';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    props.sorting === 'ASC'
        ? props.initialData.sort((a, b) => a.id - b.id)
        : props.initialData.sort((a, b) => b.id - a.id);

    return (
        <ul>
            {props.initialData.map((item) => {
                return (
                    <li key={item.id}>
                        <ListItem name={item.name} />
                    </li>
                );
            })}
        </ul>
    );
}
