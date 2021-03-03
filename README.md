# Drag&Drop(DnD) API 사용해보기

> 드래그앤드랍을 어떻게 사용하는지에 대해서 알아보고 이를 이용해서 **재미있는 썸띵**을 만들어 보자.

> 재미있는 썸띵 : `LoL 카드 만들기`

<br/>

## DnD 사용을 위해서 알아야 하는 것들

### draggable 속성

드래그앤드랍 API를 사용하기 위해선 HTML요소를 드래그 할 수 있게 만들어줘야한다. 그렇게 만들어주기 위해선 HTML 요소에 `draggable`이라는 속성을 `true`로 지정해야한다.

```HTML
<div draggable="true">Draggable</div>
```

> 요소마다 draggable 속성에 대한 기본값을 갖고 있기때문에, 명시적으로 지정해주지 않으면, HTML 요소의 기본값을 사용한다. 예를 들어, a 태그, img태그는 기본값으로 `draggable=true` 이다.

                    |
