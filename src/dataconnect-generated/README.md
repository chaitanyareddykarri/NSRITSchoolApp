# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `nsrit`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*GetUserByPhone*](#getuserbyphone)
  - [*GetStudentsByBranch*](#getstudentsbybranch)
  - [*GetStudentsBySection*](#getstudentsbysection)
  - [*GetParentChildren*](#getparentchildren)
  - [*GetParentByUser*](#getparentbyuser)
  - [*GetBranches*](#getbranches)
  - [*GetBranchDetails*](#getbranchdetails)
  - [*GetUsersByRole*](#getusersbyrole)
  - [*GetAssignmentConflicts*](#getassignmentconflicts)
  - [*GetGlobalClasses*](#getglobalclasses)
  - [*GetClassDetails*](#getclassdetails)
  - [*GetGlobalStudents*](#getglobalstudents)
  - [*GetStudentProfile*](#getstudentprofile)
  - [*GetStudentAttendance*](#getstudentattendance)
  - [*GetStudentFeeHistory*](#getstudentfeehistory)
  - [*GetDashboardStatistics*](#getdashboardstatistics)
  - [*GetWingsByBranch*](#getwingsbybranch)
  - [*GetClassesByWing*](#getclassesbywing)
  - [*GetSectionsByClass*](#getsectionsbyclass)
  - [*GetTeacherAssignments*](#getteacherassignments)
  - [*SearchStudents*](#searchstudents)
  - [*GetStudentIdSequence*](#getstudentidsequence)
  - [*GetAttendanceByMonth*](#getattendancebymonth)
  - [*GetAttendanceBySection*](#getattendancebysection)
  - [*GetFeeDetails*](#getfeedetails)
  - [*GetFeeRecordsByBranch*](#getfeerecordsbybranch)
  - [*GetAllFeeRecords*](#getallfeerecords)
  - [*GetDueStudents*](#getduestudents)
  - [*GetPaidStudents*](#getpaidstudents)
  - [*GetBranchAnalytics*](#getbranchanalytics)
  - [*GetClassAnalytics*](#getclassanalytics)
- [**Mutations**](#mutations)
  - [*CreateBranch*](#createbranch)
  - [*UpdateBranch*](#updatebranch)
  - [*AssignBranchAdmin*](#assignbranchadmin)
  - [*AssignPrincipal*](#assignprincipal)
  - [*CreateClass*](#createclass)
  - [*CreateSection*](#createsection)
  - [*RemoveSection*](#removesection)
  - [*CreateUser*](#createuser)
  - [*ClaimUserFirebaseUID*](#claimuserfirebaseuid)
  - [*CreateParent*](#createparent)
  - [*CreateParentWithoutUser*](#createparentwithoutuser)
  - [*CreateStudent*](#createstudent)
  - [*CreateAttendance*](#createattendance)
  - [*UpdateAttendance*](#updateattendance)
  - [*UploadFeePayment*](#uploadfeepayment)
  - [*AssignTeacher*](#assignteacher)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `nsrit`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `nsrit` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCurrentUser
You can execute the `GetCurrentUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUser(vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;

interface GetCurrentUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;

interface GetCurrentUserRef {
  ...
  (dc: DataConnect, vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserRef:
```typescript
const name = getCurrentUserRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUser` query requires an argument of type `GetCurrentUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCurrentUserVariables {
  firebaseUID: string;
}
```
### Return Type
Recall that executing the `GetCurrentUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCurrentUserData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```
### Using `GetCurrentUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUser, GetCurrentUserVariables } from '@dataconnect/generated';

// The `GetCurrentUser` query requires an argument of type `GetCurrentUserVariables`:
const getCurrentUserVars: GetCurrentUserVariables = {
  firebaseUID: ..., 
};

// Call the `getCurrentUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUser(getCurrentUserVars);
// Variables can be defined inline as well.
const { data } = await getCurrentUser({ firebaseUID: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUser(dataConnect, getCurrentUserVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getCurrentUser(getCurrentUserVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetCurrentUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserRef, GetCurrentUserVariables } from '@dataconnect/generated';

// The `GetCurrentUser` query requires an argument of type `GetCurrentUserVariables`:
const getCurrentUserVars: GetCurrentUserVariables = {
  firebaseUID: ..., 
};

// Call the `getCurrentUserRef()` function to get a reference to the query.
const ref = getCurrentUserRef(getCurrentUserVars);
// Variables can be defined inline as well.
const ref = getCurrentUserRef({ firebaseUID: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserRef(dataConnect, getCurrentUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUserByPhone
You can execute the `GetUserByPhone` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserByPhone(vars: GetUserByPhoneVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByPhoneData, GetUserByPhoneVariables>;

interface GetUserByPhoneRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByPhoneVariables): QueryRef<GetUserByPhoneData, GetUserByPhoneVariables>;
}
export const getUserByPhoneRef: GetUserByPhoneRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserByPhone(dc: DataConnect, vars: GetUserByPhoneVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserByPhoneData, GetUserByPhoneVariables>;

interface GetUserByPhoneRef {
  ...
  (dc: DataConnect, vars: GetUserByPhoneVariables): QueryRef<GetUserByPhoneData, GetUserByPhoneVariables>;
}
export const getUserByPhoneRef: GetUserByPhoneRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByPhoneRef:
```typescript
const name = getUserByPhoneRef.operationName;
console.log(name);
```

### Variables
The `GetUserByPhone` query requires an argument of type `GetUserByPhoneVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByPhoneVariables {
  phoneNumber: string;
}
```
### Return Type
Recall that executing the `GetUserByPhone` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByPhoneData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserByPhoneData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```
### Using `GetUserByPhone`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserByPhone, GetUserByPhoneVariables } from '@dataconnect/generated';

// The `GetUserByPhone` query requires an argument of type `GetUserByPhoneVariables`:
const getUserByPhoneVars: GetUserByPhoneVariables = {
  phoneNumber: ..., 
};

// Call the `getUserByPhone()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserByPhone(getUserByPhoneVars);
// Variables can be defined inline as well.
const { data } = await getUserByPhone({ phoneNumber: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserByPhone(dataConnect, getUserByPhoneVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUserByPhone(getUserByPhoneVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUserByPhone`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByPhoneRef, GetUserByPhoneVariables } from '@dataconnect/generated';

// The `GetUserByPhone` query requires an argument of type `GetUserByPhoneVariables`:
const getUserByPhoneVars: GetUserByPhoneVariables = {
  phoneNumber: ..., 
};

// Call the `getUserByPhoneRef()` function to get a reference to the query.
const ref = getUserByPhoneRef(getUserByPhoneVars);
// Variables can be defined inline as well.
const ref = getUserByPhoneRef({ phoneNumber: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByPhoneRef(dataConnect, getUserByPhoneVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetStudentsByBranch
You can execute the `GetStudentsByBranch` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentsByBranch(vars: GetStudentsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsByBranchData, GetStudentsByBranchVariables>;

interface GetStudentsByBranchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentsByBranchVariables): QueryRef<GetStudentsByBranchData, GetStudentsByBranchVariables>;
}
export const getStudentsByBranchRef: GetStudentsByBranchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentsByBranch(dc: DataConnect, vars: GetStudentsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsByBranchData, GetStudentsByBranchVariables>;

interface GetStudentsByBranchRef {
  ...
  (dc: DataConnect, vars: GetStudentsByBranchVariables): QueryRef<GetStudentsByBranchData, GetStudentsByBranchVariables>;
}
export const getStudentsByBranchRef: GetStudentsByBranchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentsByBranchRef:
```typescript
const name = getStudentsByBranchRef.operationName;
console.log(name);
```

### Variables
The `GetStudentsByBranch` query requires an argument of type `GetStudentsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentsByBranchVariables {
  branchId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetStudentsByBranch` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentsByBranchData {
  students: ({
    id: UUIDString;
    studentId: string;
    admissionYear: number;
    branchCode: string;
    serialNumber: number;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}
```
### Using `GetStudentsByBranch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentsByBranch, GetStudentsByBranchVariables } from '@dataconnect/generated';

// The `GetStudentsByBranch` query requires an argument of type `GetStudentsByBranchVariables`:
const getStudentsByBranchVars: GetStudentsByBranchVariables = {
  branchId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getStudentsByBranch()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentsByBranch(getStudentsByBranchVars);
// Variables can be defined inline as well.
const { data } = await getStudentsByBranch({ branchId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentsByBranch(dataConnect, getStudentsByBranchVars);

console.log(data.students);

// Or, you can use the `Promise` API.
getStudentsByBranch(getStudentsByBranchVars).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

### Using `GetStudentsByBranch`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentsByBranchRef, GetStudentsByBranchVariables } from '@dataconnect/generated';

// The `GetStudentsByBranch` query requires an argument of type `GetStudentsByBranchVariables`:
const getStudentsByBranchVars: GetStudentsByBranchVariables = {
  branchId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getStudentsByBranchRef()` function to get a reference to the query.
const ref = getStudentsByBranchRef(getStudentsByBranchVars);
// Variables can be defined inline as well.
const ref = getStudentsByBranchRef({ branchId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentsByBranchRef(dataConnect, getStudentsByBranchVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

## GetStudentsBySection
You can execute the `GetStudentsBySection` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentsBySection(vars: GetStudentsBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsBySectionData, GetStudentsBySectionVariables>;

interface GetStudentsBySectionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentsBySectionVariables): QueryRef<GetStudentsBySectionData, GetStudentsBySectionVariables>;
}
export const getStudentsBySectionRef: GetStudentsBySectionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentsBySection(dc: DataConnect, vars: GetStudentsBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentsBySectionData, GetStudentsBySectionVariables>;

interface GetStudentsBySectionRef {
  ...
  (dc: DataConnect, vars: GetStudentsBySectionVariables): QueryRef<GetStudentsBySectionData, GetStudentsBySectionVariables>;
}
export const getStudentsBySectionRef: GetStudentsBySectionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentsBySectionRef:
```typescript
const name = getStudentsBySectionRef.operationName;
console.log(name);
```

### Variables
The `GetStudentsBySection` query requires an argument of type `GetStudentsBySectionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentsBySectionVariables {
  sectionId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetStudentsBySection` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentsBySectionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentsBySectionData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}
```
### Using `GetStudentsBySection`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentsBySection, GetStudentsBySectionVariables } from '@dataconnect/generated';

// The `GetStudentsBySection` query requires an argument of type `GetStudentsBySectionVariables`:
const getStudentsBySectionVars: GetStudentsBySectionVariables = {
  sectionId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getStudentsBySection()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentsBySection(getStudentsBySectionVars);
// Variables can be defined inline as well.
const { data } = await getStudentsBySection({ sectionId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentsBySection(dataConnect, getStudentsBySectionVars);

console.log(data.students);

// Or, you can use the `Promise` API.
getStudentsBySection(getStudentsBySectionVars).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

### Using `GetStudentsBySection`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentsBySectionRef, GetStudentsBySectionVariables } from '@dataconnect/generated';

// The `GetStudentsBySection` query requires an argument of type `GetStudentsBySectionVariables`:
const getStudentsBySectionVars: GetStudentsBySectionVariables = {
  sectionId: ..., 
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getStudentsBySectionRef()` function to get a reference to the query.
const ref = getStudentsBySectionRef(getStudentsBySectionVars);
// Variables can be defined inline as well.
const ref = getStudentsBySectionRef({ sectionId: ..., limit: ..., offset: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentsBySectionRef(dataConnect, getStudentsBySectionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

## GetParentChildren
You can execute the `GetParentChildren` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getParentChildren(vars: GetParentChildrenVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentChildrenData, GetParentChildrenVariables>;

interface GetParentChildrenRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentChildrenVariables): QueryRef<GetParentChildrenData, GetParentChildrenVariables>;
}
export const getParentChildrenRef: GetParentChildrenRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getParentChildren(dc: DataConnect, vars: GetParentChildrenVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentChildrenData, GetParentChildrenVariables>;

interface GetParentChildrenRef {
  ...
  (dc: DataConnect, vars: GetParentChildrenVariables): QueryRef<GetParentChildrenData, GetParentChildrenVariables>;
}
export const getParentChildrenRef: GetParentChildrenRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getParentChildrenRef:
```typescript
const name = getParentChildrenRef.operationName;
console.log(name);
```

### Variables
The `GetParentChildren` query requires an argument of type `GetParentChildrenVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetParentChildrenVariables {
  parentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetParentChildren` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetParentChildrenData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetParentChildrenData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    admissionYear: number;
    branchCode: string;
    admissionDate: DateString;
  } & Student_Key)[];
}
```
### Using `GetParentChildren`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getParentChildren, GetParentChildrenVariables } from '@dataconnect/generated';

// The `GetParentChildren` query requires an argument of type `GetParentChildrenVariables`:
const getParentChildrenVars: GetParentChildrenVariables = {
  parentId: ..., 
};

// Call the `getParentChildren()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getParentChildren(getParentChildrenVars);
// Variables can be defined inline as well.
const { data } = await getParentChildren({ parentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getParentChildren(dataConnect, getParentChildrenVars);

console.log(data.students);

// Or, you can use the `Promise` API.
getParentChildren(getParentChildrenVars).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

### Using `GetParentChildren`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getParentChildrenRef, GetParentChildrenVariables } from '@dataconnect/generated';

// The `GetParentChildren` query requires an argument of type `GetParentChildrenVariables`:
const getParentChildrenVars: GetParentChildrenVariables = {
  parentId: ..., 
};

// Call the `getParentChildrenRef()` function to get a reference to the query.
const ref = getParentChildrenRef(getParentChildrenVars);
// Variables can be defined inline as well.
const ref = getParentChildrenRef({ parentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getParentChildrenRef(dataConnect, getParentChildrenVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

## GetParentByUser
You can execute the `GetParentByUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getParentByUser(vars: GetParentByUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentByUserData, GetParentByUserVariables>;

interface GetParentByUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetParentByUserVariables): QueryRef<GetParentByUserData, GetParentByUserVariables>;
}
export const getParentByUserRef: GetParentByUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getParentByUser(dc: DataConnect, vars: GetParentByUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetParentByUserData, GetParentByUserVariables>;

interface GetParentByUserRef {
  ...
  (dc: DataConnect, vars: GetParentByUserVariables): QueryRef<GetParentByUserData, GetParentByUserVariables>;
}
export const getParentByUserRef: GetParentByUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getParentByUserRef:
```typescript
const name = getParentByUserRef.operationName;
console.log(name);
```

### Variables
The `GetParentByUser` query requires an argument of type `GetParentByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetParentByUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetParentByUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetParentByUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetParentByUserData {
  parents: ({
    id: UUIDString;
    userId?: UUIDString | null;
    branchId: UUIDString;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    address?: string | null;
    isActive: boolean;
  } & Parent_Key)[];
}
```
### Using `GetParentByUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getParentByUser, GetParentByUserVariables } from '@dataconnect/generated';

// The `GetParentByUser` query requires an argument of type `GetParentByUserVariables`:
const getParentByUserVars: GetParentByUserVariables = {
  userId: ..., 
};

// Call the `getParentByUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getParentByUser(getParentByUserVars);
// Variables can be defined inline as well.
const { data } = await getParentByUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getParentByUser(dataConnect, getParentByUserVars);

console.log(data.parents);

// Or, you can use the `Promise` API.
getParentByUser(getParentByUserVars).then((response) => {
  const data = response.data;
  console.log(data.parents);
});
```

### Using `GetParentByUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getParentByUserRef, GetParentByUserVariables } from '@dataconnect/generated';

// The `GetParentByUser` query requires an argument of type `GetParentByUserVariables`:
const getParentByUserVars: GetParentByUserVariables = {
  userId: ..., 
};

// Call the `getParentByUserRef()` function to get a reference to the query.
const ref = getParentByUserRef(getParentByUserVars);
// Variables can be defined inline as well.
const ref = getParentByUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getParentByUserRef(dataConnect, getParentByUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.parents);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.parents);
});
```

## GetBranches
You can execute the `GetBranches` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBranches(vars?: GetBranchesVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchesData, GetBranchesVariables>;

interface GetBranchesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetBranchesVariables): QueryRef<GetBranchesData, GetBranchesVariables>;
}
export const getBranchesRef: GetBranchesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBranches(dc: DataConnect, vars?: GetBranchesVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchesData, GetBranchesVariables>;

interface GetBranchesRef {
  ...
  (dc: DataConnect, vars?: GetBranchesVariables): QueryRef<GetBranchesData, GetBranchesVariables>;
}
export const getBranchesRef: GetBranchesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBranchesRef:
```typescript
const name = getBranchesRef.operationName;
console.log(name);
```

### Variables
The `GetBranches` query has an optional argument of type `GetBranchesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetBranchesVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetBranches` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBranchesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetBranchesData {
  branches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
      principal?: {
        id: UUIDString;
        fullName: string;
        phoneNumber: string;
        role: string;
        isActive: boolean;
      } & User_Key;
        isActive: boolean;
  } & Branch_Key)[];
}
```
### Using `GetBranches`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBranches, GetBranchesVariables } from '@dataconnect/generated';

// The `GetBranches` query has an optional argument of type `GetBranchesVariables`:
const getBranchesVars: GetBranchesVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getBranches()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBranches(getBranchesVars);
// Variables can be defined inline as well.
const { data } = await getBranches({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetBranchesVariables` argument.
const { data } = await getBranches();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBranches(dataConnect, getBranchesVars);

console.log(data.branches);

// Or, you can use the `Promise` API.
getBranches(getBranchesVars).then((response) => {
  const data = response.data;
  console.log(data.branches);
});
```

### Using `GetBranches`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBranchesRef, GetBranchesVariables } from '@dataconnect/generated';

// The `GetBranches` query has an optional argument of type `GetBranchesVariables`:
const getBranchesVars: GetBranchesVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getBranchesRef()` function to get a reference to the query.
const ref = getBranchesRef(getBranchesVars);
// Variables can be defined inline as well.
const ref = getBranchesRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetBranchesVariables` argument.
const ref = getBranchesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBranchesRef(dataConnect, getBranchesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.branches);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.branches);
});
```

## GetBranchDetails
You can execute the `GetBranchDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBranchDetails(vars: GetBranchDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchDetailsData, GetBranchDetailsVariables>;

interface GetBranchDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBranchDetailsVariables): QueryRef<GetBranchDetailsData, GetBranchDetailsVariables>;
}
export const getBranchDetailsRef: GetBranchDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBranchDetails(dc: DataConnect, vars: GetBranchDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchDetailsData, GetBranchDetailsVariables>;

interface GetBranchDetailsRef {
  ...
  (dc: DataConnect, vars: GetBranchDetailsVariables): QueryRef<GetBranchDetailsData, GetBranchDetailsVariables>;
}
export const getBranchDetailsRef: GetBranchDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBranchDetailsRef:
```typescript
const name = getBranchDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetBranchDetails` query requires an argument of type `GetBranchDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetBranchDetailsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetBranchDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBranchDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetBranchDetailsData {
  branch?: {
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    isActive: boolean;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
      principal?: {
        id: UUIDString;
        fullName: string;
        phoneNumber: string;
        role: string;
        isActive: boolean;
      } & User_Key;
  } & Branch_Key;
    academicClasses: ({
      id: UUIDString;
      branchId: UUIDString;
      wingId: UUIDString;
      name: string;
      displayOrder?: number | null;
      isActive: boolean;
    } & AcademicClass_Key)[];
      sections: ({
        id: UUIDString;
        branchId: UUIDString;
        wingId: UUIDString;
        academicClassId: UUIDString;
        name: string;
        isActive: boolean;
        academicClass: {
          id: UUIDString;
          name: string;
        } & AcademicClass_Key;
      } & Section_Key)[];
        students: ({
          id: UUIDString;
          studentId: string;
          fullName: string;
          academicClassId: UUIDString;
          sectionId: UUIDString;
          isActive: boolean;
        } & Student_Key)[];
          users: ({
            id: UUIDString;
            fullName: string;
            phoneNumber: string;
            role: string;
            branchId?: UUIDString | null;
            isActive: boolean;
          } & User_Key)[];
            teacherAssignments: ({
              id: UUIDString;
              teacherId: UUIDString;
              sectionId: UUIDString;
              isClassTeacher: boolean;
              teacher: {
                id: UUIDString;
                fullName: string;
                phoneNumber: string;
                role: string;
              } & User_Key;
            } & TeacherAssignment_Key)[];
              attendances: ({
                id: UUIDString;
                status: string;
                attendanceDate: DateString;
              } & Attendance_Key)[];
                studentFees: ({
                  id: UUIDString;
                  totalFee: number;
                  paidAmount: number;
                  remainingAmount: number;
                  status: string;
                  dueDate: DateString;
                } & StudentFee_Key)[];
}
```
### Using `GetBranchDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBranchDetails, GetBranchDetailsVariables } from '@dataconnect/generated';

// The `GetBranchDetails` query requires an argument of type `GetBranchDetailsVariables`:
const getBranchDetailsVars: GetBranchDetailsVariables = {
  branchId: ..., 
};

// Call the `getBranchDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBranchDetails(getBranchDetailsVars);
// Variables can be defined inline as well.
const { data } = await getBranchDetails({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBranchDetails(dataConnect, getBranchDetailsVars);

console.log(data.branch);
console.log(data.academicClasses);
console.log(data.sections);
console.log(data.students);
console.log(data.users);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getBranchDetails(getBranchDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.branch);
  console.log(data.academicClasses);
  console.log(data.sections);
  console.log(data.students);
  console.log(data.users);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetBranchDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBranchDetailsRef, GetBranchDetailsVariables } from '@dataconnect/generated';

// The `GetBranchDetails` query requires an argument of type `GetBranchDetailsVariables`:
const getBranchDetailsVars: GetBranchDetailsVariables = {
  branchId: ..., 
};

// Call the `getBranchDetailsRef()` function to get a reference to the query.
const ref = getBranchDetailsRef(getBranchDetailsVars);
// Variables can be defined inline as well.
const ref = getBranchDetailsRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBranchDetailsRef(dataConnect, getBranchDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.branch);
console.log(data.academicClasses);
console.log(data.sections);
console.log(data.students);
console.log(data.users);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.branch);
  console.log(data.academicClasses);
  console.log(data.sections);
  console.log(data.students);
  console.log(data.users);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetUsersByRole
You can execute the `GetUsersByRole` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUsersByRole(vars: GetUsersByRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsersByRoleData, GetUsersByRoleVariables>;

interface GetUsersByRoleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUsersByRoleVariables): QueryRef<GetUsersByRoleData, GetUsersByRoleVariables>;
}
export const getUsersByRoleRef: GetUsersByRoleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUsersByRole(dc: DataConnect, vars: GetUsersByRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUsersByRoleData, GetUsersByRoleVariables>;

interface GetUsersByRoleRef {
  ...
  (dc: DataConnect, vars: GetUsersByRoleVariables): QueryRef<GetUsersByRoleData, GetUsersByRoleVariables>;
}
export const getUsersByRoleRef: GetUsersByRoleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUsersByRoleRef:
```typescript
const name = getUsersByRoleRef.operationName;
console.log(name);
```

### Variables
The `GetUsersByRole` query requires an argument of type `GetUsersByRoleVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUsersByRoleVariables {
  role: string;
  alternateRole: string;
  searchText: string;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `GetUsersByRole` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUsersByRoleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUsersByRoleData {
  users: ({
    id: UUIDString;
    fullName: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```
### Using `GetUsersByRole`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUsersByRole, GetUsersByRoleVariables } from '@dataconnect/generated';

// The `GetUsersByRole` query requires an argument of type `GetUsersByRoleVariables`:
const getUsersByRoleVars: GetUsersByRoleVariables = {
  role: ..., 
  alternateRole: ..., 
  searchText: ..., 
  limit: ..., // optional
};

// Call the `getUsersByRole()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUsersByRole(getUsersByRoleVars);
// Variables can be defined inline as well.
const { data } = await getUsersByRole({ role: ..., alternateRole: ..., searchText: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUsersByRole(dataConnect, getUsersByRoleVars);

console.log(data.users);

// Or, you can use the `Promise` API.
getUsersByRole(getUsersByRoleVars).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUsersByRole`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUsersByRoleRef, GetUsersByRoleVariables } from '@dataconnect/generated';

// The `GetUsersByRole` query requires an argument of type `GetUsersByRoleVariables`:
const getUsersByRoleVars: GetUsersByRoleVariables = {
  role: ..., 
  alternateRole: ..., 
  searchText: ..., 
  limit: ..., // optional
};

// Call the `getUsersByRoleRef()` function to get a reference to the query.
const ref = getUsersByRoleRef(getUsersByRoleVars);
// Variables can be defined inline as well.
const ref = getUsersByRoleRef({ role: ..., alternateRole: ..., searchText: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUsersByRoleRef(dataConnect, getUsersByRoleVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetAssignmentConflicts
You can execute the `GetAssignmentConflicts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAssignmentConflicts(vars: GetAssignmentConflictsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;

interface GetAssignmentConflictsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssignmentConflictsVariables): QueryRef<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
}
export const getAssignmentConflictsRef: GetAssignmentConflictsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssignmentConflicts(dc: DataConnect, vars: GetAssignmentConflictsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;

interface GetAssignmentConflictsRef {
  ...
  (dc: DataConnect, vars: GetAssignmentConflictsVariables): QueryRef<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
}
export const getAssignmentConflictsRef: GetAssignmentConflictsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssignmentConflictsRef:
```typescript
const name = getAssignmentConflictsRef.operationName;
console.log(name);
```

### Variables
The `GetAssignmentConflicts` query requires an argument of type `GetAssignmentConflictsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAssignmentConflictsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetAssignmentConflicts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssignmentConflictsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAssignmentConflictsData {
  branchAdminBranches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
  } & Branch_Key)[];
    principalBranches: ({
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key)[];
}
```
### Using `GetAssignmentConflicts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssignmentConflicts, GetAssignmentConflictsVariables } from '@dataconnect/generated';

// The `GetAssignmentConflicts` query requires an argument of type `GetAssignmentConflictsVariables`:
const getAssignmentConflictsVars: GetAssignmentConflictsVariables = {
  userId: ..., 
};

// Call the `getAssignmentConflicts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssignmentConflicts(getAssignmentConflictsVars);
// Variables can be defined inline as well.
const { data } = await getAssignmentConflicts({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssignmentConflicts(dataConnect, getAssignmentConflictsVars);

console.log(data.branchAdminBranches);
console.log(data.principalBranches);

// Or, you can use the `Promise` API.
getAssignmentConflicts(getAssignmentConflictsVars).then((response) => {
  const data = response.data;
  console.log(data.branchAdminBranches);
  console.log(data.principalBranches);
});
```

### Using `GetAssignmentConflicts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssignmentConflictsRef, GetAssignmentConflictsVariables } from '@dataconnect/generated';

// The `GetAssignmentConflicts` query requires an argument of type `GetAssignmentConflictsVariables`:
const getAssignmentConflictsVars: GetAssignmentConflictsVariables = {
  userId: ..., 
};

// Call the `getAssignmentConflictsRef()` function to get a reference to the query.
const ref = getAssignmentConflictsRef(getAssignmentConflictsVars);
// Variables can be defined inline as well.
const ref = getAssignmentConflictsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssignmentConflictsRef(dataConnect, getAssignmentConflictsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.branchAdminBranches);
console.log(data.principalBranches);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.branchAdminBranches);
  console.log(data.principalBranches);
});
```

## GetGlobalClasses
You can execute the `GetGlobalClasses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGlobalClasses(vars?: GetGlobalClassesVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalClassesData, GetGlobalClassesVariables>;

interface GetGlobalClassesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetGlobalClassesVariables): QueryRef<GetGlobalClassesData, GetGlobalClassesVariables>;
}
export const getGlobalClassesRef: GetGlobalClassesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGlobalClasses(dc: DataConnect, vars?: GetGlobalClassesVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalClassesData, GetGlobalClassesVariables>;

interface GetGlobalClassesRef {
  ...
  (dc: DataConnect, vars?: GetGlobalClassesVariables): QueryRef<GetGlobalClassesData, GetGlobalClassesVariables>;
}
export const getGlobalClassesRef: GetGlobalClassesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGlobalClassesRef:
```typescript
const name = getGlobalClassesRef.operationName;
console.log(name);
```

### Variables
The `GetGlobalClasses` query has an optional argument of type `GetGlobalClassesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetGlobalClassesVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetGlobalClasses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGlobalClassesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGlobalClassesData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
      status: string;
      isActive: boolean;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
        displayOrder?: number | null;
      } & AcademicClass_Key;
  } & Section_Key)[];
    students: ({
      id: UUIDString;
      branchId: UUIDString;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      isActive: boolean;
    } & Student_Key)[];
      teacherAssignments: ({
        id: UUIDString;
        teacherId: UUIDString;
        sectionId: UUIDString;
        isClassTeacher: boolean;
        teacher: {
          id: UUIDString;
          fullName: string;
          phoneNumber: string;
          role: string;
        } & User_Key;
      } & TeacherAssignment_Key)[];
        attendances: ({
          id: UUIDString;
          sectionId: UUIDString;
          status: string;
        } & Attendance_Key)[];
          studentFees: ({
            id: UUIDString;
            paidAmount: number;
            remainingAmount: number;
            student: {
              id: UUIDString;
              sectionId: UUIDString;
            } & Student_Key;
          } & StudentFee_Key)[];
}
```
### Using `GetGlobalClasses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGlobalClasses, GetGlobalClassesVariables } from '@dataconnect/generated';

// The `GetGlobalClasses` query has an optional argument of type `GetGlobalClassesVariables`:
const getGlobalClassesVars: GetGlobalClassesVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getGlobalClasses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGlobalClasses(getGlobalClassesVars);
// Variables can be defined inline as well.
const { data } = await getGlobalClasses({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetGlobalClassesVariables` argument.
const { data } = await getGlobalClasses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGlobalClasses(dataConnect, getGlobalClassesVars);

console.log(data.sections);
console.log(data.students);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getGlobalClasses(getGlobalClassesVars).then((response) => {
  const data = response.data;
  console.log(data.sections);
  console.log(data.students);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetGlobalClasses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGlobalClassesRef, GetGlobalClassesVariables } from '@dataconnect/generated';

// The `GetGlobalClasses` query has an optional argument of type `GetGlobalClassesVariables`:
const getGlobalClassesVars: GetGlobalClassesVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getGlobalClassesRef()` function to get a reference to the query.
const ref = getGlobalClassesRef(getGlobalClassesVars);
// Variables can be defined inline as well.
const ref = getGlobalClassesRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetGlobalClassesVariables` argument.
const ref = getGlobalClassesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGlobalClassesRef(dataConnect, getGlobalClassesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sections);
console.log(data.students);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sections);
  console.log(data.students);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetClassDetails
You can execute the `GetClassDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClassDetails(vars: GetClassDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassDetailsData, GetClassDetailsVariables>;

interface GetClassDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassDetailsVariables): QueryRef<GetClassDetailsData, GetClassDetailsVariables>;
}
export const getClassDetailsRef: GetClassDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClassDetails(dc: DataConnect, vars: GetClassDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassDetailsData, GetClassDetailsVariables>;

interface GetClassDetailsRef {
  ...
  (dc: DataConnect, vars: GetClassDetailsVariables): QueryRef<GetClassDetailsData, GetClassDetailsVariables>;
}
export const getClassDetailsRef: GetClassDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClassDetailsRef:
```typescript
const name = getClassDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetClassDetails` query requires an argument of type `GetClassDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClassDetailsVariables {
  sectionId: UUIDString;
}
```
### Return Type
Recall that executing the `GetClassDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClassDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClassDetailsData {
  section?: {
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
        displayOrder?: number | null;
      } & AcademicClass_Key;
  } & Section_Key;
    students: ({
      id: UUIDString;
      studentId: string;
      fullName: string;
      gender?: string | null;
      phoneNumber?: string | null;
      rollNumber?: string | null;
      isActive: boolean;
    } & Student_Key)[];
      teacherAssignments: ({
        id: UUIDString;
        teacherId: UUIDString;
        subjectName?: string | null;
        isClassTeacher: boolean;
        teacher: {
          id: UUIDString;
          fullName: string;
          phoneNumber: string;
          role: string;
        } & User_Key;
      } & TeacherAssignment_Key)[];
        attendances: ({
          id: UUIDString;
          studentId: UUIDString;
          attendanceDate: DateString;
          status: string;
          remarks?: string | null;
        } & Attendance_Key)[];
          studentFees: ({
            id: UUIDString;
            studentId: UUIDString;
            totalFee: number;
            paidAmount: number;
            remainingAmount: number;
            status: string;
            dueDate: DateString;
          } & StudentFee_Key)[];
}
```
### Using `GetClassDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClassDetails, GetClassDetailsVariables } from '@dataconnect/generated';

// The `GetClassDetails` query requires an argument of type `GetClassDetailsVariables`:
const getClassDetailsVars: GetClassDetailsVariables = {
  sectionId: ..., 
};

// Call the `getClassDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClassDetails(getClassDetailsVars);
// Variables can be defined inline as well.
const { data } = await getClassDetails({ sectionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClassDetails(dataConnect, getClassDetailsVars);

console.log(data.section);
console.log(data.students);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getClassDetails(getClassDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.section);
  console.log(data.students);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetClassDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClassDetailsRef, GetClassDetailsVariables } from '@dataconnect/generated';

// The `GetClassDetails` query requires an argument of type `GetClassDetailsVariables`:
const getClassDetailsVars: GetClassDetailsVariables = {
  sectionId: ..., 
};

// Call the `getClassDetailsRef()` function to get a reference to the query.
const ref = getClassDetailsRef(getClassDetailsVars);
// Variables can be defined inline as well.
const ref = getClassDetailsRef({ sectionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClassDetailsRef(dataConnect, getClassDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.section);
console.log(data.students);
console.log(data.teacherAssignments);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.section);
  console.log(data.students);
  console.log(data.teacherAssignments);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetGlobalStudents
You can execute the `GetGlobalStudents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGlobalStudents(vars?: GetGlobalStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStudentsData, GetGlobalStudentsVariables>;

interface GetGlobalStudentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetGlobalStudentsVariables): QueryRef<GetGlobalStudentsData, GetGlobalStudentsVariables>;
}
export const getGlobalStudentsRef: GetGlobalStudentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGlobalStudents(dc: DataConnect, vars?: GetGlobalStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetGlobalStudentsData, GetGlobalStudentsVariables>;

interface GetGlobalStudentsRef {
  ...
  (dc: DataConnect, vars?: GetGlobalStudentsVariables): QueryRef<GetGlobalStudentsData, GetGlobalStudentsVariables>;
}
export const getGlobalStudentsRef: GetGlobalStudentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGlobalStudentsRef:
```typescript
const name = getGlobalStudentsRef.operationName;
console.log(name);
```

### Variables
The `GetGlobalStudents` query has an optional argument of type `GetGlobalStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetGlobalStudentsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetGlobalStudents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGlobalStudentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGlobalStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
      } & AcademicClass_Key;
        section: {
          id: UUIDString;
          name: string;
        } & Section_Key;
          parent: {
            id: UUIDString;
            fullName: string;
            fatherName?: string | null;
            motherName?: string | null;
            phoneNumber: string;
            email?: string | null;
          } & Parent_Key;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      studentId: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        studentId: UUIDString;
        paidAmount: number;
        remainingAmount: number;
        status: string;
      } & StudentFee_Key)[];
}
```
### Using `GetGlobalStudents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGlobalStudents, GetGlobalStudentsVariables } from '@dataconnect/generated';

// The `GetGlobalStudents` query has an optional argument of type `GetGlobalStudentsVariables`:
const getGlobalStudentsVars: GetGlobalStudentsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getGlobalStudents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGlobalStudents(getGlobalStudentsVars);
// Variables can be defined inline as well.
const { data } = await getGlobalStudents({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetGlobalStudentsVariables` argument.
const { data } = await getGlobalStudents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGlobalStudents(dataConnect, getGlobalStudentsVars);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getGlobalStudents(getGlobalStudentsVars).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetGlobalStudents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGlobalStudentsRef, GetGlobalStudentsVariables } from '@dataconnect/generated';

// The `GetGlobalStudents` query has an optional argument of type `GetGlobalStudentsVariables`:
const getGlobalStudentsVars: GetGlobalStudentsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getGlobalStudentsRef()` function to get a reference to the query.
const ref = getGlobalStudentsRef(getGlobalStudentsVars);
// Variables can be defined inline as well.
const ref = getGlobalStudentsRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetGlobalStudentsVariables` argument.
const ref = getGlobalStudentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGlobalStudentsRef(dataConnect, getGlobalStudentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetStudentProfile
You can execute the `GetStudentProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentProfile(vars: GetStudentProfileVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentProfileData, GetStudentProfileVariables>;

interface GetStudentProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentProfileVariables): QueryRef<GetStudentProfileData, GetStudentProfileVariables>;
}
export const getStudentProfileRef: GetStudentProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentProfile(dc: DataConnect, vars: GetStudentProfileVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentProfileData, GetStudentProfileVariables>;

interface GetStudentProfileRef {
  ...
  (dc: DataConnect, vars: GetStudentProfileVariables): QueryRef<GetStudentProfileData, GetStudentProfileVariables>;
}
export const getStudentProfileRef: GetStudentProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentProfileRef:
```typescript
const name = getStudentProfileRef.operationName;
console.log(name);
```

### Variables
The `GetStudentProfile` query requires an argument of type `GetStudentProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentProfileVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetStudentProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentProfileData {
  student?: {
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    photoUrl?: string | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    aadhaarDocumentUrl?: string | null;
    transferCertificateUrl?: string | null;
    birthCertificateUrl?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
      } & AcademicClass_Key;
        section: {
          id: UUIDString;
          name: string;
        } & Section_Key;
          parent: {
            id: UUIDString;
            fullName: string;
            fatherName?: string | null;
            motherName?: string | null;
            countryCode: string;
            phoneNumber: string;
            email?: string | null;
            address?: string | null;
          } & Parent_Key;
  } & Student_Key;
    attendances: ({
      id: UUIDString;
      attendanceDate: DateString;
      status: string;
      remarks?: string | null;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        totalFee: number;
        paidAmount: number;
        remainingAmount: number;
        status: string;
        dueDate: DateString;
      } & StudentFee_Key)[];
        payments: ({
          id: UUIDString;
          studentFeeId: UUIDString;
          amount: number;
          paymentMode: string;
          receiptNumber?: string | null;
          uploadedById: UUIDString;
          remarks?: string | null;
          paidAt: TimestampString;
        } & Payment_Key)[];
}
```
### Using `GetStudentProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentProfile, GetStudentProfileVariables } from '@dataconnect/generated';

// The `GetStudentProfile` query requires an argument of type `GetStudentProfileVariables`:
const getStudentProfileVars: GetStudentProfileVariables = {
  studentId: ..., 
};

// Call the `getStudentProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentProfile(getStudentProfileVars);
// Variables can be defined inline as well.
const { data } = await getStudentProfile({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentProfile(dataConnect, getStudentProfileVars);

console.log(data.student);
console.log(data.attendances);
console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
getStudentProfile(getStudentProfileVars).then((response) => {
  const data = response.data;
  console.log(data.student);
  console.log(data.attendances);
  console.log(data.studentFees);
  console.log(data.payments);
});
```

### Using `GetStudentProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentProfileRef, GetStudentProfileVariables } from '@dataconnect/generated';

// The `GetStudentProfile` query requires an argument of type `GetStudentProfileVariables`:
const getStudentProfileVars: GetStudentProfileVariables = {
  studentId: ..., 
};

// Call the `getStudentProfileRef()` function to get a reference to the query.
const ref = getStudentProfileRef(getStudentProfileVars);
// Variables can be defined inline as well.
const ref = getStudentProfileRef({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentProfileRef(dataConnect, getStudentProfileVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.student);
console.log(data.attendances);
console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.student);
  console.log(data.attendances);
  console.log(data.studentFees);
  console.log(data.payments);
});
```

## GetStudentAttendance
You can execute the `GetStudentAttendance` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentAttendance(vars: GetStudentAttendanceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentAttendanceData, GetStudentAttendanceVariables>;

interface GetStudentAttendanceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentAttendanceVariables): QueryRef<GetStudentAttendanceData, GetStudentAttendanceVariables>;
}
export const getStudentAttendanceRef: GetStudentAttendanceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentAttendance(dc: DataConnect, vars: GetStudentAttendanceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentAttendanceData, GetStudentAttendanceVariables>;

interface GetStudentAttendanceRef {
  ...
  (dc: DataConnect, vars: GetStudentAttendanceVariables): QueryRef<GetStudentAttendanceData, GetStudentAttendanceVariables>;
}
export const getStudentAttendanceRef: GetStudentAttendanceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentAttendanceRef:
```typescript
const name = getStudentAttendanceRef.operationName;
console.log(name);
```

### Variables
The `GetStudentAttendance` query requires an argument of type `GetStudentAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentAttendanceVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetStudentAttendance` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentAttendanceData {
  attendances: ({
    id: UUIDString;
    attendanceDate: DateString;
    status: string;
    remarks?: string | null;
  } & Attendance_Key)[];
}
```
### Using `GetStudentAttendance`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentAttendance, GetStudentAttendanceVariables } from '@dataconnect/generated';

// The `GetStudentAttendance` query requires an argument of type `GetStudentAttendanceVariables`:
const getStudentAttendanceVars: GetStudentAttendanceVariables = {
  studentId: ..., 
};

// Call the `getStudentAttendance()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentAttendance(getStudentAttendanceVars);
// Variables can be defined inline as well.
const { data } = await getStudentAttendance({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentAttendance(dataConnect, getStudentAttendanceVars);

console.log(data.attendances);

// Or, you can use the `Promise` API.
getStudentAttendance(getStudentAttendanceVars).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

### Using `GetStudentAttendance`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentAttendanceRef, GetStudentAttendanceVariables } from '@dataconnect/generated';

// The `GetStudentAttendance` query requires an argument of type `GetStudentAttendanceVariables`:
const getStudentAttendanceVars: GetStudentAttendanceVariables = {
  studentId: ..., 
};

// Call the `getStudentAttendanceRef()` function to get a reference to the query.
const ref = getStudentAttendanceRef(getStudentAttendanceVars);
// Variables can be defined inline as well.
const ref = getStudentAttendanceRef({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentAttendanceRef(dataConnect, getStudentAttendanceVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.attendances);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

## GetStudentFeeHistory
You can execute the `GetStudentFeeHistory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentFeeHistory(vars: GetStudentFeeHistoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;

interface GetStudentFeeHistoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentFeeHistoryVariables): QueryRef<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
}
export const getStudentFeeHistoryRef: GetStudentFeeHistoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentFeeHistory(dc: DataConnect, vars: GetStudentFeeHistoryVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;

interface GetStudentFeeHistoryRef {
  ...
  (dc: DataConnect, vars: GetStudentFeeHistoryVariables): QueryRef<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
}
export const getStudentFeeHistoryRef: GetStudentFeeHistoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentFeeHistoryRef:
```typescript
const name = getStudentFeeHistoryRef.operationName;
console.log(name);
```

### Variables
The `GetStudentFeeHistory` query requires an argument of type `GetStudentFeeHistoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentFeeHistoryVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetStudentFeeHistory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentFeeHistoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentFeeHistoryData {
  studentFees: ({
    id: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
    payments: ({
      id: UUIDString;
      studentFeeId: UUIDString;
      amount: number;
      paymentMode: string;
      receiptNumber?: string | null;
      remarks?: string | null;
      paidAt: TimestampString;
    } & Payment_Key)[];
}
```
### Using `GetStudentFeeHistory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentFeeHistory, GetStudentFeeHistoryVariables } from '@dataconnect/generated';

// The `GetStudentFeeHistory` query requires an argument of type `GetStudentFeeHistoryVariables`:
const getStudentFeeHistoryVars: GetStudentFeeHistoryVariables = {
  studentId: ..., 
};

// Call the `getStudentFeeHistory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentFeeHistory(getStudentFeeHistoryVars);
// Variables can be defined inline as well.
const { data } = await getStudentFeeHistory({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentFeeHistory(dataConnect, getStudentFeeHistoryVars);

console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
getStudentFeeHistory(getStudentFeeHistoryVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
  console.log(data.payments);
});
```

### Using `GetStudentFeeHistory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentFeeHistoryRef, GetStudentFeeHistoryVariables } from '@dataconnect/generated';

// The `GetStudentFeeHistory` query requires an argument of type `GetStudentFeeHistoryVariables`:
const getStudentFeeHistoryVars: GetStudentFeeHistoryVariables = {
  studentId: ..., 
};

// Call the `getStudentFeeHistoryRef()` function to get a reference to the query.
const ref = getStudentFeeHistoryRef(getStudentFeeHistoryVars);
// Variables can be defined inline as well.
const ref = getStudentFeeHistoryRef({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentFeeHistoryRef(dataConnect, getStudentFeeHistoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
  console.log(data.payments);
});
```

## GetDashboardStatistics
You can execute the `GetDashboardStatistics` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDashboardStatistics(options?: ExecuteQueryOptions): QueryPromise<GetDashboardStatisticsData, undefined>;

interface GetDashboardStatisticsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDashboardStatisticsData, undefined>;
}
export const getDashboardStatisticsRef: GetDashboardStatisticsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDashboardStatistics(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDashboardStatisticsData, undefined>;

interface GetDashboardStatisticsRef {
  ...
  (dc: DataConnect): QueryRef<GetDashboardStatisticsData, undefined>;
}
export const getDashboardStatisticsRef: GetDashboardStatisticsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDashboardStatisticsRef:
```typescript
const name = getDashboardStatisticsRef.operationName;
console.log(name);
```

### Variables
The `GetDashboardStatistics` query has no variables.
### Return Type
Recall that executing the `GetDashboardStatistics` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDashboardStatisticsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDashboardStatisticsData {
  branches: ({
    id: UUIDString;
    isActive: boolean;
    status: string;
  } & Branch_Key)[];
    academicClasses: ({
      id: UUIDString;
      branchId: UUIDString;
      isActive: boolean;
    } & AcademicClass_Key)[];
      users: ({
        id: UUIDString;
        branchId?: UUIDString | null;
        role: string;
      } & User_Key)[];
        students: ({
          id: UUIDString;
          branchId: UUIDString;
        } & Student_Key)[];
          attendances: ({
            id: UUIDString;
            status: string;
            attendanceDate: DateString;
          } & Attendance_Key)[];
            studentFees: ({
              id: UUIDString;
              remainingAmount: number;
            } & StudentFee_Key)[];
}
```
### Using `GetDashboardStatistics`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDashboardStatistics } from '@dataconnect/generated';


// Call the `getDashboardStatistics()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDashboardStatistics();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDashboardStatistics(dataConnect);

console.log(data.branches);
console.log(data.academicClasses);
console.log(data.users);
console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getDashboardStatistics().then((response) => {
  const data = response.data;
  console.log(data.branches);
  console.log(data.academicClasses);
  console.log(data.users);
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetDashboardStatistics`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDashboardStatisticsRef } from '@dataconnect/generated';


// Call the `getDashboardStatisticsRef()` function to get a reference to the query.
const ref = getDashboardStatisticsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDashboardStatisticsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.branches);
console.log(data.academicClasses);
console.log(data.users);
console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.branches);
  console.log(data.academicClasses);
  console.log(data.users);
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetWingsByBranch
You can execute the `GetWingsByBranch` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWingsByBranch(vars: GetWingsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetWingsByBranchData, GetWingsByBranchVariables>;

interface GetWingsByBranchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWingsByBranchVariables): QueryRef<GetWingsByBranchData, GetWingsByBranchVariables>;
}
export const getWingsByBranchRef: GetWingsByBranchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWingsByBranch(dc: DataConnect, vars: GetWingsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetWingsByBranchData, GetWingsByBranchVariables>;

interface GetWingsByBranchRef {
  ...
  (dc: DataConnect, vars: GetWingsByBranchVariables): QueryRef<GetWingsByBranchData, GetWingsByBranchVariables>;
}
export const getWingsByBranchRef: GetWingsByBranchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWingsByBranchRef:
```typescript
const name = getWingsByBranchRef.operationName;
console.log(name);
```

### Variables
The `GetWingsByBranch` query requires an argument of type `GetWingsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWingsByBranchVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWingsByBranch` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWingsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetWingsByBranchData {
  wings: ({
    id: UUIDString;
    branchId: UUIDString;
    name: string;
    code?: string | null;
    isActive: boolean;
  } & Wing_Key)[];
}
```
### Using `GetWingsByBranch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWingsByBranch, GetWingsByBranchVariables } from '@dataconnect/generated';

// The `GetWingsByBranch` query requires an argument of type `GetWingsByBranchVariables`:
const getWingsByBranchVars: GetWingsByBranchVariables = {
  branchId: ..., 
};

// Call the `getWingsByBranch()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWingsByBranch(getWingsByBranchVars);
// Variables can be defined inline as well.
const { data } = await getWingsByBranch({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWingsByBranch(dataConnect, getWingsByBranchVars);

console.log(data.wings);

// Or, you can use the `Promise` API.
getWingsByBranch(getWingsByBranchVars).then((response) => {
  const data = response.data;
  console.log(data.wings);
});
```

### Using `GetWingsByBranch`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWingsByBranchRef, GetWingsByBranchVariables } from '@dataconnect/generated';

// The `GetWingsByBranch` query requires an argument of type `GetWingsByBranchVariables`:
const getWingsByBranchVars: GetWingsByBranchVariables = {
  branchId: ..., 
};

// Call the `getWingsByBranchRef()` function to get a reference to the query.
const ref = getWingsByBranchRef(getWingsByBranchVars);
// Variables can be defined inline as well.
const ref = getWingsByBranchRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWingsByBranchRef(dataConnect, getWingsByBranchVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.wings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.wings);
});
```

## GetClassesByWing
You can execute the `GetClassesByWing` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClassesByWing(vars: GetClassesByWingVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassesByWingData, GetClassesByWingVariables>;

interface GetClassesByWingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassesByWingVariables): QueryRef<GetClassesByWingData, GetClassesByWingVariables>;
}
export const getClassesByWingRef: GetClassesByWingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClassesByWing(dc: DataConnect, vars: GetClassesByWingVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassesByWingData, GetClassesByWingVariables>;

interface GetClassesByWingRef {
  ...
  (dc: DataConnect, vars: GetClassesByWingVariables): QueryRef<GetClassesByWingData, GetClassesByWingVariables>;
}
export const getClassesByWingRef: GetClassesByWingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClassesByWingRef:
```typescript
const name = getClassesByWingRef.operationName;
console.log(name);
```

### Variables
The `GetClassesByWing` query requires an argument of type `GetClassesByWingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClassesByWingVariables {
  wingId: UUIDString;
}
```
### Return Type
Recall that executing the `GetClassesByWing` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClassesByWingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClassesByWingData {
  academicClasses: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    name: string;
    displayOrder?: number | null;
    isActive: boolean;
  } & AcademicClass_Key)[];
}
```
### Using `GetClassesByWing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClassesByWing, GetClassesByWingVariables } from '@dataconnect/generated';

// The `GetClassesByWing` query requires an argument of type `GetClassesByWingVariables`:
const getClassesByWingVars: GetClassesByWingVariables = {
  wingId: ..., 
};

// Call the `getClassesByWing()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClassesByWing(getClassesByWingVars);
// Variables can be defined inline as well.
const { data } = await getClassesByWing({ wingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClassesByWing(dataConnect, getClassesByWingVars);

console.log(data.academicClasses);

// Or, you can use the `Promise` API.
getClassesByWing(getClassesByWingVars).then((response) => {
  const data = response.data;
  console.log(data.academicClasses);
});
```

### Using `GetClassesByWing`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClassesByWingRef, GetClassesByWingVariables } from '@dataconnect/generated';

// The `GetClassesByWing` query requires an argument of type `GetClassesByWingVariables`:
const getClassesByWingVars: GetClassesByWingVariables = {
  wingId: ..., 
};

// Call the `getClassesByWingRef()` function to get a reference to the query.
const ref = getClassesByWingRef(getClassesByWingVars);
// Variables can be defined inline as well.
const ref = getClassesByWingRef({ wingId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClassesByWingRef(dataConnect, getClassesByWingVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.academicClasses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.academicClasses);
});
```

## GetSectionsByClass
You can execute the `GetSectionsByClass` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSectionsByClass(vars: GetSectionsByClassVariables, options?: ExecuteQueryOptions): QueryPromise<GetSectionsByClassData, GetSectionsByClassVariables>;

interface GetSectionsByClassRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSectionsByClassVariables): QueryRef<GetSectionsByClassData, GetSectionsByClassVariables>;
}
export const getSectionsByClassRef: GetSectionsByClassRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSectionsByClass(dc: DataConnect, vars: GetSectionsByClassVariables, options?: ExecuteQueryOptions): QueryPromise<GetSectionsByClassData, GetSectionsByClassVariables>;

interface GetSectionsByClassRef {
  ...
  (dc: DataConnect, vars: GetSectionsByClassVariables): QueryRef<GetSectionsByClassData, GetSectionsByClassVariables>;
}
export const getSectionsByClassRef: GetSectionsByClassRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSectionsByClassRef:
```typescript
const name = getSectionsByClassRef.operationName;
console.log(name);
```

### Variables
The `GetSectionsByClass` query requires an argument of type `GetSectionsByClassVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSectionsByClassVariables {
  academicClassId: UUIDString;
}
```
### Return Type
Recall that executing the `GetSectionsByClass` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSectionsByClassData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSectionsByClassData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
  } & Section_Key)[];
}
```
### Using `GetSectionsByClass`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSectionsByClass, GetSectionsByClassVariables } from '@dataconnect/generated';

// The `GetSectionsByClass` query requires an argument of type `GetSectionsByClassVariables`:
const getSectionsByClassVars: GetSectionsByClassVariables = {
  academicClassId: ..., 
};

// Call the `getSectionsByClass()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSectionsByClass(getSectionsByClassVars);
// Variables can be defined inline as well.
const { data } = await getSectionsByClass({ academicClassId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSectionsByClass(dataConnect, getSectionsByClassVars);

console.log(data.sections);

// Or, you can use the `Promise` API.
getSectionsByClass(getSectionsByClassVars).then((response) => {
  const data = response.data;
  console.log(data.sections);
});
```

### Using `GetSectionsByClass`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSectionsByClassRef, GetSectionsByClassVariables } from '@dataconnect/generated';

// The `GetSectionsByClass` query requires an argument of type `GetSectionsByClassVariables`:
const getSectionsByClassVars: GetSectionsByClassVariables = {
  academicClassId: ..., 
};

// Call the `getSectionsByClassRef()` function to get a reference to the query.
const ref = getSectionsByClassRef(getSectionsByClassVars);
// Variables can be defined inline as well.
const ref = getSectionsByClassRef({ academicClassId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSectionsByClassRef(dataConnect, getSectionsByClassVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.sections);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.sections);
});
```

## GetTeacherAssignments
You can execute the `GetTeacherAssignments` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTeacherAssignments(vars: GetTeacherAssignmentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;

interface GetTeacherAssignmentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTeacherAssignmentsVariables): QueryRef<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
}
export const getTeacherAssignmentsRef: GetTeacherAssignmentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTeacherAssignments(dc: DataConnect, vars: GetTeacherAssignmentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;

interface GetTeacherAssignmentsRef {
  ...
  (dc: DataConnect, vars: GetTeacherAssignmentsVariables): QueryRef<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
}
export const getTeacherAssignmentsRef: GetTeacherAssignmentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTeacherAssignmentsRef:
```typescript
const name = getTeacherAssignmentsRef.operationName;
console.log(name);
```

### Variables
The `GetTeacherAssignments` query requires an argument of type `GetTeacherAssignmentsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetTeacherAssignmentsVariables {
  teacherId: UUIDString;
}
```
### Return Type
Recall that executing the `GetTeacherAssignments` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTeacherAssignmentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTeacherAssignmentsData {
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    subjectName?: string | null;
    isClassTeacher: boolean;
  } & TeacherAssignment_Key)[];
}
```
### Using `GetTeacherAssignments`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTeacherAssignments, GetTeacherAssignmentsVariables } from '@dataconnect/generated';

// The `GetTeacherAssignments` query requires an argument of type `GetTeacherAssignmentsVariables`:
const getTeacherAssignmentsVars: GetTeacherAssignmentsVariables = {
  teacherId: ..., 
};

// Call the `getTeacherAssignments()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTeacherAssignments(getTeacherAssignmentsVars);
// Variables can be defined inline as well.
const { data } = await getTeacherAssignments({ teacherId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTeacherAssignments(dataConnect, getTeacherAssignmentsVars);

console.log(data.teacherAssignments);

// Or, you can use the `Promise` API.
getTeacherAssignments(getTeacherAssignmentsVars).then((response) => {
  const data = response.data;
  console.log(data.teacherAssignments);
});
```

### Using `GetTeacherAssignments`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTeacherAssignmentsRef, GetTeacherAssignmentsVariables } from '@dataconnect/generated';

// The `GetTeacherAssignments` query requires an argument of type `GetTeacherAssignmentsVariables`:
const getTeacherAssignmentsVars: GetTeacherAssignmentsVariables = {
  teacherId: ..., 
};

// Call the `getTeacherAssignmentsRef()` function to get a reference to the query.
const ref = getTeacherAssignmentsRef(getTeacherAssignmentsVars);
// Variables can be defined inline as well.
const ref = getTeacherAssignmentsRef({ teacherId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTeacherAssignmentsRef(dataConnect, getTeacherAssignmentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.teacherAssignments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.teacherAssignments);
});
```

## SearchStudents
You can execute the `SearchStudents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
searchStudents(vars: SearchStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<SearchStudentsData, SearchStudentsVariables>;

interface SearchStudentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SearchStudentsVariables): QueryRef<SearchStudentsData, SearchStudentsVariables>;
}
export const searchStudentsRef: SearchStudentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
searchStudents(dc: DataConnect, vars: SearchStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<SearchStudentsData, SearchStudentsVariables>;

interface SearchStudentsRef {
  ...
  (dc: DataConnect, vars: SearchStudentsVariables): QueryRef<SearchStudentsData, SearchStudentsVariables>;
}
export const searchStudentsRef: SearchStudentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the searchStudentsRef:
```typescript
const name = searchStudentsRef.operationName;
console.log(name);
```

### Variables
The `SearchStudents` query requires an argument of type `SearchStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SearchStudentsVariables {
  branchId: UUIDString;
  searchText: string;
  limit?: number | null;
}
```
### Return Type
Recall that executing the `SearchStudents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SearchStudentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SearchStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
  } & Student_Key)[];
}
```
### Using `SearchStudents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, searchStudents, SearchStudentsVariables } from '@dataconnect/generated';

// The `SearchStudents` query requires an argument of type `SearchStudentsVariables`:
const searchStudentsVars: SearchStudentsVariables = {
  branchId: ..., 
  searchText: ..., 
  limit: ..., // optional
};

// Call the `searchStudents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await searchStudents(searchStudentsVars);
// Variables can be defined inline as well.
const { data } = await searchStudents({ branchId: ..., searchText: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await searchStudents(dataConnect, searchStudentsVars);

console.log(data.students);

// Or, you can use the `Promise` API.
searchStudents(searchStudentsVars).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

### Using `SearchStudents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, searchStudentsRef, SearchStudentsVariables } from '@dataconnect/generated';

// The `SearchStudents` query requires an argument of type `SearchStudentsVariables`:
const searchStudentsVars: SearchStudentsVariables = {
  branchId: ..., 
  searchText: ..., 
  limit: ..., // optional
};

// Call the `searchStudentsRef()` function to get a reference to the query.
const ref = searchStudentsRef(searchStudentsVars);
// Variables can be defined inline as well.
const ref = searchStudentsRef({ branchId: ..., searchText: ..., limit: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = searchStudentsRef(dataConnect, searchStudentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

## GetStudentIdSequence
You can execute the `GetStudentIdSequence` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStudentIdSequence(vars: GetStudentIdSequenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;

interface GetStudentIdSequenceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStudentIdSequenceVariables): QueryRef<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
}
export const getStudentIdSequenceRef: GetStudentIdSequenceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStudentIdSequence(dc: DataConnect, vars: GetStudentIdSequenceVariables, options?: ExecuteQueryOptions): QueryPromise<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;

interface GetStudentIdSequenceRef {
  ...
  (dc: DataConnect, vars: GetStudentIdSequenceVariables): QueryRef<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
}
export const getStudentIdSequenceRef: GetStudentIdSequenceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStudentIdSequenceRef:
```typescript
const name = getStudentIdSequenceRef.operationName;
console.log(name);
```

### Variables
The `GetStudentIdSequence` query requires an argument of type `GetStudentIdSequenceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStudentIdSequenceVariables {
  admissionYear: number;
  branchCode: string;
}
```
### Return Type
Recall that executing the `GetStudentIdSequence` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStudentIdSequenceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStudentIdSequenceData {
  studentIdSequences: ({
    admissionYear: number;
    branchCode: string;
    lastSerialNumber: number;
  } & StudentIdSequence_Key)[];
}
```
### Using `GetStudentIdSequence`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStudentIdSequence, GetStudentIdSequenceVariables } from '@dataconnect/generated';

// The `GetStudentIdSequence` query requires an argument of type `GetStudentIdSequenceVariables`:
const getStudentIdSequenceVars: GetStudentIdSequenceVariables = {
  admissionYear: ..., 
  branchCode: ..., 
};

// Call the `getStudentIdSequence()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStudentIdSequence(getStudentIdSequenceVars);
// Variables can be defined inline as well.
const { data } = await getStudentIdSequence({ admissionYear: ..., branchCode: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStudentIdSequence(dataConnect, getStudentIdSequenceVars);

console.log(data.studentIdSequences);

// Or, you can use the `Promise` API.
getStudentIdSequence(getStudentIdSequenceVars).then((response) => {
  const data = response.data;
  console.log(data.studentIdSequences);
});
```

### Using `GetStudentIdSequence`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStudentIdSequenceRef, GetStudentIdSequenceVariables } from '@dataconnect/generated';

// The `GetStudentIdSequence` query requires an argument of type `GetStudentIdSequenceVariables`:
const getStudentIdSequenceVars: GetStudentIdSequenceVariables = {
  admissionYear: ..., 
  branchCode: ..., 
};

// Call the `getStudentIdSequenceRef()` function to get a reference to the query.
const ref = getStudentIdSequenceRef(getStudentIdSequenceVars);
// Variables can be defined inline as well.
const ref = getStudentIdSequenceRef({ admissionYear: ..., branchCode: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStudentIdSequenceRef(dataConnect, getStudentIdSequenceVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentIdSequences);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentIdSequences);
});
```

## GetAttendanceByMonth
You can execute the `GetAttendanceByMonth` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAttendanceByMonth(vars: GetAttendanceByMonthVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;

interface GetAttendanceByMonthRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttendanceByMonthVariables): QueryRef<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
}
export const getAttendanceByMonthRef: GetAttendanceByMonthRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAttendanceByMonth(dc: DataConnect, vars: GetAttendanceByMonthVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;

interface GetAttendanceByMonthRef {
  ...
  (dc: DataConnect, vars: GetAttendanceByMonthVariables): QueryRef<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
}
export const getAttendanceByMonthRef: GetAttendanceByMonthRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAttendanceByMonthRef:
```typescript
const name = getAttendanceByMonthRef.operationName;
console.log(name);
```

### Variables
The `GetAttendanceByMonth` query requires an argument of type `GetAttendanceByMonthVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAttendanceByMonthVariables {
  studentId: UUIDString;
  fromDate: DateString;
  toDate: DateString;
}
```
### Return Type
Recall that executing the `GetAttendanceByMonth` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAttendanceByMonthData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAttendanceByMonthData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
    createdAt: TimestampString;
  } & Attendance_Key)[];
}
```
### Using `GetAttendanceByMonth`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAttendanceByMonth, GetAttendanceByMonthVariables } from '@dataconnect/generated';

// The `GetAttendanceByMonth` query requires an argument of type `GetAttendanceByMonthVariables`:
const getAttendanceByMonthVars: GetAttendanceByMonthVariables = {
  studentId: ..., 
  fromDate: ..., 
  toDate: ..., 
};

// Call the `getAttendanceByMonth()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAttendanceByMonth(getAttendanceByMonthVars);
// Variables can be defined inline as well.
const { data } = await getAttendanceByMonth({ studentId: ..., fromDate: ..., toDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAttendanceByMonth(dataConnect, getAttendanceByMonthVars);

console.log(data.attendances);

// Or, you can use the `Promise` API.
getAttendanceByMonth(getAttendanceByMonthVars).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

### Using `GetAttendanceByMonth`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAttendanceByMonthRef, GetAttendanceByMonthVariables } from '@dataconnect/generated';

// The `GetAttendanceByMonth` query requires an argument of type `GetAttendanceByMonthVariables`:
const getAttendanceByMonthVars: GetAttendanceByMonthVariables = {
  studentId: ..., 
  fromDate: ..., 
  toDate: ..., 
};

// Call the `getAttendanceByMonthRef()` function to get a reference to the query.
const ref = getAttendanceByMonthRef(getAttendanceByMonthVars);
// Variables can be defined inline as well.
const ref = getAttendanceByMonthRef({ studentId: ..., fromDate: ..., toDate: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAttendanceByMonthRef(dataConnect, getAttendanceByMonthVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.attendances);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

## GetAttendanceBySection
You can execute the `GetAttendanceBySection` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAttendanceBySection(vars: GetAttendanceBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;

interface GetAttendanceBySectionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttendanceBySectionVariables): QueryRef<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
}
export const getAttendanceBySectionRef: GetAttendanceBySectionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAttendanceBySection(dc: DataConnect, vars: GetAttendanceBySectionVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;

interface GetAttendanceBySectionRef {
  ...
  (dc: DataConnect, vars: GetAttendanceBySectionVariables): QueryRef<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
}
export const getAttendanceBySectionRef: GetAttendanceBySectionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAttendanceBySectionRef:
```typescript
const name = getAttendanceBySectionRef.operationName;
console.log(name);
```

### Variables
The `GetAttendanceBySection` query requires an argument of type `GetAttendanceBySectionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAttendanceBySectionVariables {
  sectionId: UUIDString;
  attendanceDate: DateString;
}
```
### Return Type
Recall that executing the `GetAttendanceBySection` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAttendanceBySectionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAttendanceBySectionData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
  } & Attendance_Key)[];
}
```
### Using `GetAttendanceBySection`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAttendanceBySection, GetAttendanceBySectionVariables } from '@dataconnect/generated';

// The `GetAttendanceBySection` query requires an argument of type `GetAttendanceBySectionVariables`:
const getAttendanceBySectionVars: GetAttendanceBySectionVariables = {
  sectionId: ..., 
  attendanceDate: ..., 
};

// Call the `getAttendanceBySection()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAttendanceBySection(getAttendanceBySectionVars);
// Variables can be defined inline as well.
const { data } = await getAttendanceBySection({ sectionId: ..., attendanceDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAttendanceBySection(dataConnect, getAttendanceBySectionVars);

console.log(data.attendances);

// Or, you can use the `Promise` API.
getAttendanceBySection(getAttendanceBySectionVars).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

### Using `GetAttendanceBySection`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAttendanceBySectionRef, GetAttendanceBySectionVariables } from '@dataconnect/generated';

// The `GetAttendanceBySection` query requires an argument of type `GetAttendanceBySectionVariables`:
const getAttendanceBySectionVars: GetAttendanceBySectionVariables = {
  sectionId: ..., 
  attendanceDate: ..., 
};

// Call the `getAttendanceBySectionRef()` function to get a reference to the query.
const ref = getAttendanceBySectionRef(getAttendanceBySectionVars);
// Variables can be defined inline as well.
const ref = getAttendanceBySectionRef({ sectionId: ..., attendanceDate: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAttendanceBySectionRef(dataConnect, getAttendanceBySectionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.attendances);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.attendances);
});
```

## GetFeeDetails
You can execute the `GetFeeDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFeeDetails(vars: GetFeeDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeDetailsData, GetFeeDetailsVariables>;

interface GetFeeDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFeeDetailsVariables): QueryRef<GetFeeDetailsData, GetFeeDetailsVariables>;
}
export const getFeeDetailsRef: GetFeeDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFeeDetails(dc: DataConnect, vars: GetFeeDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeDetailsData, GetFeeDetailsVariables>;

interface GetFeeDetailsRef {
  ...
  (dc: DataConnect, vars: GetFeeDetailsVariables): QueryRef<GetFeeDetailsData, GetFeeDetailsVariables>;
}
export const getFeeDetailsRef: GetFeeDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFeeDetailsRef:
```typescript
const name = getFeeDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetFeeDetails` query requires an argument of type `GetFeeDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFeeDetailsVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetFeeDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFeeDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFeeDetailsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    updatedAt: TimestampString;
  } & StudentFee_Key)[];
    payments: ({
      id: UUIDString;
      studentId: UUIDString;
      studentFeeId: UUIDString;
      amount: number;
      paymentMode: string;
      receiptNumber?: string | null;
      uploadedById: UUIDString;
      remarks?: string | null;
      paidAt: TimestampString;
    } & Payment_Key)[];
}
```
### Using `GetFeeDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFeeDetails, GetFeeDetailsVariables } from '@dataconnect/generated';

// The `GetFeeDetails` query requires an argument of type `GetFeeDetailsVariables`:
const getFeeDetailsVars: GetFeeDetailsVariables = {
  studentId: ..., 
};

// Call the `getFeeDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFeeDetails(getFeeDetailsVars);
// Variables can be defined inline as well.
const { data } = await getFeeDetails({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFeeDetails(dataConnect, getFeeDetailsVars);

console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
getFeeDetails(getFeeDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
  console.log(data.payments);
});
```

### Using `GetFeeDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFeeDetailsRef, GetFeeDetailsVariables } from '@dataconnect/generated';

// The `GetFeeDetails` query requires an argument of type `GetFeeDetailsVariables`:
const getFeeDetailsVars: GetFeeDetailsVariables = {
  studentId: ..., 
};

// Call the `getFeeDetailsRef()` function to get a reference to the query.
const ref = getFeeDetailsRef(getFeeDetailsVars);
// Variables can be defined inline as well.
const ref = getFeeDetailsRef({ studentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFeeDetailsRef(dataConnect, getFeeDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);
console.log(data.payments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
  console.log(data.payments);
});
```

## GetFeeRecordsByBranch
You can execute the `GetFeeRecordsByBranch` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFeeRecordsByBranch(vars: GetFeeRecordsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;

interface GetFeeRecordsByBranchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFeeRecordsByBranchVariables): QueryRef<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
}
export const getFeeRecordsByBranchRef: GetFeeRecordsByBranchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFeeRecordsByBranch(dc: DataConnect, vars: GetFeeRecordsByBranchVariables, options?: ExecuteQueryOptions): QueryPromise<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;

interface GetFeeRecordsByBranchRef {
  ...
  (dc: DataConnect, vars: GetFeeRecordsByBranchVariables): QueryRef<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
}
export const getFeeRecordsByBranchRef: GetFeeRecordsByBranchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFeeRecordsByBranchRef:
```typescript
const name = getFeeRecordsByBranchRef.operationName;
console.log(name);
```

### Variables
The `GetFeeRecordsByBranch` query requires an argument of type `GetFeeRecordsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFeeRecordsByBranchVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetFeeRecordsByBranch` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFeeRecordsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFeeRecordsByBranchData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```
### Using `GetFeeRecordsByBranch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFeeRecordsByBranch, GetFeeRecordsByBranchVariables } from '@dataconnect/generated';

// The `GetFeeRecordsByBranch` query requires an argument of type `GetFeeRecordsByBranchVariables`:
const getFeeRecordsByBranchVars: GetFeeRecordsByBranchVariables = {
  branchId: ..., 
};

// Call the `getFeeRecordsByBranch()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFeeRecordsByBranch(getFeeRecordsByBranchVars);
// Variables can be defined inline as well.
const { data } = await getFeeRecordsByBranch({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFeeRecordsByBranch(dataConnect, getFeeRecordsByBranchVars);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
getFeeRecordsByBranch(getFeeRecordsByBranchVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

### Using `GetFeeRecordsByBranch`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFeeRecordsByBranchRef, GetFeeRecordsByBranchVariables } from '@dataconnect/generated';

// The `GetFeeRecordsByBranch` query requires an argument of type `GetFeeRecordsByBranchVariables`:
const getFeeRecordsByBranchVars: GetFeeRecordsByBranchVariables = {
  branchId: ..., 
};

// Call the `getFeeRecordsByBranchRef()` function to get a reference to the query.
const ref = getFeeRecordsByBranchRef(getFeeRecordsByBranchVars);
// Variables can be defined inline as well.
const ref = getFeeRecordsByBranchRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFeeRecordsByBranchRef(dataConnect, getFeeRecordsByBranchVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

## GetAllFeeRecords
You can execute the `GetAllFeeRecords` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllFeeRecords(vars?: GetAllFeeRecordsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;

interface GetAllFeeRecordsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetAllFeeRecordsVariables): QueryRef<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
}
export const getAllFeeRecordsRef: GetAllFeeRecordsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllFeeRecords(dc: DataConnect, vars?: GetAllFeeRecordsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;

interface GetAllFeeRecordsRef {
  ...
  (dc: DataConnect, vars?: GetAllFeeRecordsVariables): QueryRef<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
}
export const getAllFeeRecordsRef: GetAllFeeRecordsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllFeeRecordsRef:
```typescript
const name = getAllFeeRecordsRef.operationName;
console.log(name);
```

### Variables
The `GetAllFeeRecords` query has an optional argument of type `GetAllFeeRecordsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAllFeeRecordsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that executing the `GetAllFeeRecords` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllFeeRecordsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllFeeRecordsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```
### Using `GetAllFeeRecords`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllFeeRecords, GetAllFeeRecordsVariables } from '@dataconnect/generated';

// The `GetAllFeeRecords` query has an optional argument of type `GetAllFeeRecordsVariables`:
const getAllFeeRecordsVars: GetAllFeeRecordsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getAllFeeRecords()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllFeeRecords(getAllFeeRecordsVars);
// Variables can be defined inline as well.
const { data } = await getAllFeeRecords({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetAllFeeRecordsVariables` argument.
const { data } = await getAllFeeRecords();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllFeeRecords(dataConnect, getAllFeeRecordsVars);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
getAllFeeRecords(getAllFeeRecordsVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

### Using `GetAllFeeRecords`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllFeeRecordsRef, GetAllFeeRecordsVariables } from '@dataconnect/generated';

// The `GetAllFeeRecords` query has an optional argument of type `GetAllFeeRecordsVariables`:
const getAllFeeRecordsVars: GetAllFeeRecordsVariables = {
  limit: ..., // optional
  offset: ..., // optional
};

// Call the `getAllFeeRecordsRef()` function to get a reference to the query.
const ref = getAllFeeRecordsRef(getAllFeeRecordsVars);
// Variables can be defined inline as well.
const ref = getAllFeeRecordsRef({ limit: ..., offset: ..., });
// Since all variables are optional for this query, you can omit the `GetAllFeeRecordsVariables` argument.
const ref = getAllFeeRecordsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllFeeRecordsRef(dataConnect, getAllFeeRecordsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

## GetDueStudents
You can execute the `GetDueStudents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDueStudents(vars: GetDueStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDueStudentsData, GetDueStudentsVariables>;

interface GetDueStudentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDueStudentsVariables): QueryRef<GetDueStudentsData, GetDueStudentsVariables>;
}
export const getDueStudentsRef: GetDueStudentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDueStudents(dc: DataConnect, vars: GetDueStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetDueStudentsData, GetDueStudentsVariables>;

interface GetDueStudentsRef {
  ...
  (dc: DataConnect, vars: GetDueStudentsVariables): QueryRef<GetDueStudentsData, GetDueStudentsVariables>;
}
export const getDueStudentsRef: GetDueStudentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDueStudentsRef:
```typescript
const name = getDueStudentsRef.operationName;
console.log(name);
```

### Variables
The `GetDueStudents` query requires an argument of type `GetDueStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDueStudentsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetDueStudents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDueStudentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDueStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```
### Using `GetDueStudents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDueStudents, GetDueStudentsVariables } from '@dataconnect/generated';

// The `GetDueStudents` query requires an argument of type `GetDueStudentsVariables`:
const getDueStudentsVars: GetDueStudentsVariables = {
  branchId: ..., 
};

// Call the `getDueStudents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDueStudents(getDueStudentsVars);
// Variables can be defined inline as well.
const { data } = await getDueStudents({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDueStudents(dataConnect, getDueStudentsVars);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
getDueStudents(getDueStudentsVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

### Using `GetDueStudents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDueStudentsRef, GetDueStudentsVariables } from '@dataconnect/generated';

// The `GetDueStudents` query requires an argument of type `GetDueStudentsVariables`:
const getDueStudentsVars: GetDueStudentsVariables = {
  branchId: ..., 
};

// Call the `getDueStudentsRef()` function to get a reference to the query.
const ref = getDueStudentsRef(getDueStudentsVars);
// Variables can be defined inline as well.
const ref = getDueStudentsRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDueStudentsRef(dataConnect, getDueStudentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

## GetPaidStudents
You can execute the `GetPaidStudents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPaidStudents(vars: GetPaidStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetPaidStudentsData, GetPaidStudentsVariables>;

interface GetPaidStudentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPaidStudentsVariables): QueryRef<GetPaidStudentsData, GetPaidStudentsVariables>;
}
export const getPaidStudentsRef: GetPaidStudentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPaidStudents(dc: DataConnect, vars: GetPaidStudentsVariables, options?: ExecuteQueryOptions): QueryPromise<GetPaidStudentsData, GetPaidStudentsVariables>;

interface GetPaidStudentsRef {
  ...
  (dc: DataConnect, vars: GetPaidStudentsVariables): QueryRef<GetPaidStudentsData, GetPaidStudentsVariables>;
}
export const getPaidStudentsRef: GetPaidStudentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPaidStudentsRef:
```typescript
const name = getPaidStudentsRef.operationName;
console.log(name);
```

### Variables
The `GetPaidStudents` query requires an argument of type `GetPaidStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPaidStudentsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetPaidStudents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPaidStudentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPaidStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```
### Using `GetPaidStudents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPaidStudents, GetPaidStudentsVariables } from '@dataconnect/generated';

// The `GetPaidStudents` query requires an argument of type `GetPaidStudentsVariables`:
const getPaidStudentsVars: GetPaidStudentsVariables = {
  branchId: ..., 
};

// Call the `getPaidStudents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPaidStudents(getPaidStudentsVars);
// Variables can be defined inline as well.
const { data } = await getPaidStudents({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPaidStudents(dataConnect, getPaidStudentsVars);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
getPaidStudents(getPaidStudentsVars).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

### Using `GetPaidStudents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPaidStudentsRef, GetPaidStudentsVariables } from '@dataconnect/generated';

// The `GetPaidStudents` query requires an argument of type `GetPaidStudentsVariables`:
const getPaidStudentsVars: GetPaidStudentsVariables = {
  branchId: ..., 
};

// Call the `getPaidStudentsRef()` function to get a reference to the query.
const ref = getPaidStudentsRef(getPaidStudentsVars);
// Variables can be defined inline as well.
const ref = getPaidStudentsRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPaidStudentsRef(dataConnect, getPaidStudentsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.studentFees);
});
```

## GetBranchAnalytics
You can execute the `GetBranchAnalytics` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBranchAnalytics(vars: GetBranchAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;

interface GetBranchAnalyticsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBranchAnalyticsVariables): QueryRef<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
}
export const getBranchAnalyticsRef: GetBranchAnalyticsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBranchAnalytics(dc: DataConnect, vars: GetBranchAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;

interface GetBranchAnalyticsRef {
  ...
  (dc: DataConnect, vars: GetBranchAnalyticsVariables): QueryRef<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
}
export const getBranchAnalyticsRef: GetBranchAnalyticsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBranchAnalyticsRef:
```typescript
const name = getBranchAnalyticsRef.operationName;
console.log(name);
```

### Variables
The `GetBranchAnalytics` query requires an argument of type `GetBranchAnalyticsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetBranchAnalyticsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that executing the `GetBranchAnalytics` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBranchAnalyticsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetBranchAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        paidAmount: number;
        remainingAmount: number;
      } & StudentFee_Key)[];
}
```
### Using `GetBranchAnalytics`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBranchAnalytics, GetBranchAnalyticsVariables } from '@dataconnect/generated';

// The `GetBranchAnalytics` query requires an argument of type `GetBranchAnalyticsVariables`:
const getBranchAnalyticsVars: GetBranchAnalyticsVariables = {
  branchId: ..., 
};

// Call the `getBranchAnalytics()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBranchAnalytics(getBranchAnalyticsVars);
// Variables can be defined inline as well.
const { data } = await getBranchAnalytics({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBranchAnalytics(dataConnect, getBranchAnalyticsVars);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getBranchAnalytics(getBranchAnalyticsVars).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetBranchAnalytics`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBranchAnalyticsRef, GetBranchAnalyticsVariables } from '@dataconnect/generated';

// The `GetBranchAnalytics` query requires an argument of type `GetBranchAnalyticsVariables`:
const getBranchAnalyticsVars: GetBranchAnalyticsVariables = {
  branchId: ..., 
};

// Call the `getBranchAnalyticsRef()` function to get a reference to the query.
const ref = getBranchAnalyticsRef(getBranchAnalyticsVars);
// Variables can be defined inline as well.
const ref = getBranchAnalyticsRef({ branchId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBranchAnalyticsRef(dataConnect, getBranchAnalyticsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

## GetClassAnalytics
You can execute the `GetClassAnalytics` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClassAnalytics(vars: GetClassAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassAnalyticsData, GetClassAnalyticsVariables>;

interface GetClassAnalyticsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClassAnalyticsVariables): QueryRef<GetClassAnalyticsData, GetClassAnalyticsVariables>;
}
export const getClassAnalyticsRef: GetClassAnalyticsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClassAnalytics(dc: DataConnect, vars: GetClassAnalyticsVariables, options?: ExecuteQueryOptions): QueryPromise<GetClassAnalyticsData, GetClassAnalyticsVariables>;

interface GetClassAnalyticsRef {
  ...
  (dc: DataConnect, vars: GetClassAnalyticsVariables): QueryRef<GetClassAnalyticsData, GetClassAnalyticsVariables>;
}
export const getClassAnalyticsRef: GetClassAnalyticsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClassAnalyticsRef:
```typescript
const name = getClassAnalyticsRef.operationName;
console.log(name);
```

### Variables
The `GetClassAnalytics` query requires an argument of type `GetClassAnalyticsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClassAnalyticsVariables {
  academicClassId: UUIDString;
}
```
### Return Type
Recall that executing the `GetClassAnalytics` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClassAnalyticsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetClassAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        paidAmount: number;
        remainingAmount: number;
      } & StudentFee_Key)[];
}
```
### Using `GetClassAnalytics`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClassAnalytics, GetClassAnalyticsVariables } from '@dataconnect/generated';

// The `GetClassAnalytics` query requires an argument of type `GetClassAnalyticsVariables`:
const getClassAnalyticsVars: GetClassAnalyticsVariables = {
  academicClassId: ..., 
};

// Call the `getClassAnalytics()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClassAnalytics(getClassAnalyticsVars);
// Variables can be defined inline as well.
const { data } = await getClassAnalytics({ academicClassId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClassAnalytics(dataConnect, getClassAnalyticsVars);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
getClassAnalytics(getClassAnalyticsVars).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

### Using `GetClassAnalytics`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClassAnalyticsRef, GetClassAnalyticsVariables } from '@dataconnect/generated';

// The `GetClassAnalytics` query requires an argument of type `GetClassAnalyticsVariables`:
const getClassAnalyticsVars: GetClassAnalyticsVariables = {
  academicClassId: ..., 
};

// Call the `getClassAnalyticsRef()` function to get a reference to the query.
const ref = getClassAnalyticsRef(getClassAnalyticsVars);
// Variables can be defined inline as well.
const ref = getClassAnalyticsRef({ academicClassId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClassAnalyticsRef(dataConnect, getClassAnalyticsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);
console.log(data.attendances);
console.log(data.studentFees);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
  console.log(data.attendances);
  console.log(data.studentFees);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `nsrit` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateBranch
You can execute the `CreateBranch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createBranch(vars: CreateBranchVariables): MutationPromise<CreateBranchData, CreateBranchVariables>;

interface CreateBranchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBranchVariables): MutationRef<CreateBranchData, CreateBranchVariables>;
}
export const createBranchRef: CreateBranchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBranch(dc: DataConnect, vars: CreateBranchVariables): MutationPromise<CreateBranchData, CreateBranchVariables>;

interface CreateBranchRef {
  ...
  (dc: DataConnect, vars: CreateBranchVariables): MutationRef<CreateBranchData, CreateBranchVariables>;
}
export const createBranchRef: CreateBranchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBranchRef:
```typescript
const name = createBranchRef.operationName;
console.log(name);
```

### Variables
The `CreateBranch` mutation requires an argument of type `CreateBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateBranchVariables {
  name: string;
  branchCode: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `CreateBranch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBranchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBranchData {
  branch_insert: Branch_Key;
}
```
### Using `CreateBranch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBranch, CreateBranchVariables } from '@dataconnect/generated';

// The `CreateBranch` mutation requires an argument of type `CreateBranchVariables`:
const createBranchVars: CreateBranchVariables = {
  name: ..., 
  branchCode: ..., 
  address: ..., // optional
  city: ..., // optional
  state: ..., // optional
  pincode: ..., // optional
  phone: ..., // optional
  email: ..., // optional
  status: ..., // optional
};

// Call the `createBranch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBranch(createBranchVars);
// Variables can be defined inline as well.
const { data } = await createBranch({ name: ..., branchCode: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBranch(dataConnect, createBranchVars);

console.log(data.branch_insert);

// Or, you can use the `Promise` API.
createBranch(createBranchVars).then((response) => {
  const data = response.data;
  console.log(data.branch_insert);
});
```

### Using `CreateBranch`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBranchRef, CreateBranchVariables } from '@dataconnect/generated';

// The `CreateBranch` mutation requires an argument of type `CreateBranchVariables`:
const createBranchVars: CreateBranchVariables = {
  name: ..., 
  branchCode: ..., 
  address: ..., // optional
  city: ..., // optional
  state: ..., // optional
  pincode: ..., // optional
  phone: ..., // optional
  email: ..., // optional
  status: ..., // optional
};

// Call the `createBranchRef()` function to get a reference to the mutation.
const ref = createBranchRef(createBranchVars);
// Variables can be defined inline as well.
const ref = createBranchRef({ name: ..., branchCode: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBranchRef(dataConnect, createBranchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.branch_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.branch_insert);
});
```

## UpdateBranch
You can execute the `UpdateBranch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateBranch(vars: UpdateBranchVariables): MutationPromise<UpdateBranchData, UpdateBranchVariables>;

interface UpdateBranchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBranchVariables): MutationRef<UpdateBranchData, UpdateBranchVariables>;
}
export const updateBranchRef: UpdateBranchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBranch(dc: DataConnect, vars: UpdateBranchVariables): MutationPromise<UpdateBranchData, UpdateBranchVariables>;

interface UpdateBranchRef {
  ...
  (dc: DataConnect, vars: UpdateBranchVariables): MutationRef<UpdateBranchData, UpdateBranchVariables>;
}
export const updateBranchRef: UpdateBranchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBranchRef:
```typescript
const name = updateBranchRef.operationName;
console.log(name);
```

### Variables
The `UpdateBranch` mutation requires an argument of type `UpdateBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBranchVariables {
  id: UUIDString;
  name: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status: string;
  isActive: boolean;
}
```
### Return Type
Recall that executing the `UpdateBranch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBranchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBranchData {
  branch_update?: Branch_Key | null;
}
```
### Using `UpdateBranch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBranch, UpdateBranchVariables } from '@dataconnect/generated';

// The `UpdateBranch` mutation requires an argument of type `UpdateBranchVariables`:
const updateBranchVars: UpdateBranchVariables = {
  id: ..., 
  name: ..., 
  address: ..., // optional
  city: ..., // optional
  state: ..., // optional
  pincode: ..., // optional
  phone: ..., // optional
  email: ..., // optional
  status: ..., 
  isActive: ..., 
};

// Call the `updateBranch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBranch(updateBranchVars);
// Variables can be defined inline as well.
const { data } = await updateBranch({ id: ..., name: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., isActive: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBranch(dataConnect, updateBranchVars);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
updateBranch(updateBranchVars).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

### Using `UpdateBranch`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBranchRef, UpdateBranchVariables } from '@dataconnect/generated';

// The `UpdateBranch` mutation requires an argument of type `UpdateBranchVariables`:
const updateBranchVars: UpdateBranchVariables = {
  id: ..., 
  name: ..., 
  address: ..., // optional
  city: ..., // optional
  state: ..., // optional
  pincode: ..., // optional
  phone: ..., // optional
  email: ..., // optional
  status: ..., 
  isActive: ..., 
};

// Call the `updateBranchRef()` function to get a reference to the mutation.
const ref = updateBranchRef(updateBranchVars);
// Variables can be defined inline as well.
const ref = updateBranchRef({ id: ..., name: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., isActive: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBranchRef(dataConnect, updateBranchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

## AssignBranchAdmin
You can execute the `AssignBranchAdmin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignBranchAdmin(vars: AssignBranchAdminVariables): MutationPromise<AssignBranchAdminData, AssignBranchAdminVariables>;

interface AssignBranchAdminRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignBranchAdminVariables): MutationRef<AssignBranchAdminData, AssignBranchAdminVariables>;
}
export const assignBranchAdminRef: AssignBranchAdminRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignBranchAdmin(dc: DataConnect, vars: AssignBranchAdminVariables): MutationPromise<AssignBranchAdminData, AssignBranchAdminVariables>;

interface AssignBranchAdminRef {
  ...
  (dc: DataConnect, vars: AssignBranchAdminVariables): MutationRef<AssignBranchAdminData, AssignBranchAdminVariables>;
}
export const assignBranchAdminRef: AssignBranchAdminRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignBranchAdminRef:
```typescript
const name = assignBranchAdminRef.operationName;
console.log(name);
```

### Variables
The `AssignBranchAdmin` mutation requires an argument of type `AssignBranchAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignBranchAdminVariables {
  branchId: UUIDString;
  branchAdminId: UUIDString;
}
```
### Return Type
Recall that executing the `AssignBranchAdmin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignBranchAdminData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignBranchAdminData {
  branch_update?: Branch_Key | null;
}
```
### Using `AssignBranchAdmin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignBranchAdmin, AssignBranchAdminVariables } from '@dataconnect/generated';

// The `AssignBranchAdmin` mutation requires an argument of type `AssignBranchAdminVariables`:
const assignBranchAdminVars: AssignBranchAdminVariables = {
  branchId: ..., 
  branchAdminId: ..., 
};

// Call the `assignBranchAdmin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignBranchAdmin(assignBranchAdminVars);
// Variables can be defined inline as well.
const { data } = await assignBranchAdmin({ branchId: ..., branchAdminId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignBranchAdmin(dataConnect, assignBranchAdminVars);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
assignBranchAdmin(assignBranchAdminVars).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

### Using `AssignBranchAdmin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignBranchAdminRef, AssignBranchAdminVariables } from '@dataconnect/generated';

// The `AssignBranchAdmin` mutation requires an argument of type `AssignBranchAdminVariables`:
const assignBranchAdminVars: AssignBranchAdminVariables = {
  branchId: ..., 
  branchAdminId: ..., 
};

// Call the `assignBranchAdminRef()` function to get a reference to the mutation.
const ref = assignBranchAdminRef(assignBranchAdminVars);
// Variables can be defined inline as well.
const ref = assignBranchAdminRef({ branchId: ..., branchAdminId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignBranchAdminRef(dataConnect, assignBranchAdminVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

## AssignPrincipal
You can execute the `AssignPrincipal` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignPrincipal(vars: AssignPrincipalVariables): MutationPromise<AssignPrincipalData, AssignPrincipalVariables>;

interface AssignPrincipalRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignPrincipalVariables): MutationRef<AssignPrincipalData, AssignPrincipalVariables>;
}
export const assignPrincipalRef: AssignPrincipalRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignPrincipal(dc: DataConnect, vars: AssignPrincipalVariables): MutationPromise<AssignPrincipalData, AssignPrincipalVariables>;

interface AssignPrincipalRef {
  ...
  (dc: DataConnect, vars: AssignPrincipalVariables): MutationRef<AssignPrincipalData, AssignPrincipalVariables>;
}
export const assignPrincipalRef: AssignPrincipalRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignPrincipalRef:
```typescript
const name = assignPrincipalRef.operationName;
console.log(name);
```

### Variables
The `AssignPrincipal` mutation requires an argument of type `AssignPrincipalVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignPrincipalVariables {
  branchId: UUIDString;
  principalId: UUIDString;
}
```
### Return Type
Recall that executing the `AssignPrincipal` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignPrincipalData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignPrincipalData {
  branch_update?: Branch_Key | null;
}
```
### Using `AssignPrincipal`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignPrincipal, AssignPrincipalVariables } from '@dataconnect/generated';

// The `AssignPrincipal` mutation requires an argument of type `AssignPrincipalVariables`:
const assignPrincipalVars: AssignPrincipalVariables = {
  branchId: ..., 
  principalId: ..., 
};

// Call the `assignPrincipal()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignPrincipal(assignPrincipalVars);
// Variables can be defined inline as well.
const { data } = await assignPrincipal({ branchId: ..., principalId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignPrincipal(dataConnect, assignPrincipalVars);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
assignPrincipal(assignPrincipalVars).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

### Using `AssignPrincipal`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignPrincipalRef, AssignPrincipalVariables } from '@dataconnect/generated';

// The `AssignPrincipal` mutation requires an argument of type `AssignPrincipalVariables`:
const assignPrincipalVars: AssignPrincipalVariables = {
  branchId: ..., 
  principalId: ..., 
};

// Call the `assignPrincipalRef()` function to get a reference to the mutation.
const ref = assignPrincipalRef(assignPrincipalVars);
// Variables can be defined inline as well.
const ref = assignPrincipalRef({ branchId: ..., principalId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignPrincipalRef(dataConnect, assignPrincipalVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.branch_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.branch_update);
});
```

## CreateClass
You can execute the `CreateClass` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createClass(vars: CreateClassVariables): MutationPromise<CreateClassData, CreateClassVariables>;

interface CreateClassRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateClassVariables): MutationRef<CreateClassData, CreateClassVariables>;
}
export const createClassRef: CreateClassRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createClass(dc: DataConnect, vars: CreateClassVariables): MutationPromise<CreateClassData, CreateClassVariables>;

interface CreateClassRef {
  ...
  (dc: DataConnect, vars: CreateClassVariables): MutationRef<CreateClassData, CreateClassVariables>;
}
export const createClassRef: CreateClassRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createClassRef:
```typescript
const name = createClassRef.operationName;
console.log(name);
```

### Variables
The `CreateClass` mutation requires an argument of type `CreateClassVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateClassVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  name: string;
  displayOrder?: number | null;
}
```
### Return Type
Recall that executing the `CreateClass` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateClassData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateClassData {
  academicClass_insert: AcademicClass_Key;
}
```
### Using `CreateClass`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createClass, CreateClassVariables } from '@dataconnect/generated';

// The `CreateClass` mutation requires an argument of type `CreateClassVariables`:
const createClassVars: CreateClassVariables = {
  branchId: ..., 
  wingId: ..., 
  name: ..., 
  displayOrder: ..., // optional
};

// Call the `createClass()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createClass(createClassVars);
// Variables can be defined inline as well.
const { data } = await createClass({ branchId: ..., wingId: ..., name: ..., displayOrder: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createClass(dataConnect, createClassVars);

console.log(data.academicClass_insert);

// Or, you can use the `Promise` API.
createClass(createClassVars).then((response) => {
  const data = response.data;
  console.log(data.academicClass_insert);
});
```

### Using `CreateClass`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createClassRef, CreateClassVariables } from '@dataconnect/generated';

// The `CreateClass` mutation requires an argument of type `CreateClassVariables`:
const createClassVars: CreateClassVariables = {
  branchId: ..., 
  wingId: ..., 
  name: ..., 
  displayOrder: ..., // optional
};

// Call the `createClassRef()` function to get a reference to the mutation.
const ref = createClassRef(createClassVars);
// Variables can be defined inline as well.
const ref = createClassRef({ branchId: ..., wingId: ..., name: ..., displayOrder: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createClassRef(dataConnect, createClassVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.academicClass_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.academicClass_insert);
});
```

## CreateSection
You can execute the `CreateSection` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSection(vars: CreateSectionVariables): MutationPromise<CreateSectionData, CreateSectionVariables>;

interface CreateSectionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSectionVariables): MutationRef<CreateSectionData, CreateSectionVariables>;
}
export const createSectionRef: CreateSectionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSection(dc: DataConnect, vars: CreateSectionVariables): MutationPromise<CreateSectionData, CreateSectionVariables>;

interface CreateSectionRef {
  ...
  (dc: DataConnect, vars: CreateSectionVariables): MutationRef<CreateSectionData, CreateSectionVariables>;
}
export const createSectionRef: CreateSectionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSectionRef:
```typescript
const name = createSectionRef.operationName;
console.log(name);
```

### Variables
The `CreateSection` mutation requires an argument of type `CreateSectionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSectionVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  name: string;
}
```
### Return Type
Recall that executing the `CreateSection` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSectionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSectionData {
  section_insert: Section_Key;
}
```
### Using `CreateSection`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSection, CreateSectionVariables } from '@dataconnect/generated';

// The `CreateSection` mutation requires an argument of type `CreateSectionVariables`:
const createSectionVars: CreateSectionVariables = {
  branchId: ..., 
  wingId: ..., 
  academicClassId: ..., 
  name: ..., 
};

// Call the `createSection()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSection(createSectionVars);
// Variables can be defined inline as well.
const { data } = await createSection({ branchId: ..., wingId: ..., academicClassId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSection(dataConnect, createSectionVars);

console.log(data.section_insert);

// Or, you can use the `Promise` API.
createSection(createSectionVars).then((response) => {
  const data = response.data;
  console.log(data.section_insert);
});
```

### Using `CreateSection`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSectionRef, CreateSectionVariables } from '@dataconnect/generated';

// The `CreateSection` mutation requires an argument of type `CreateSectionVariables`:
const createSectionVars: CreateSectionVariables = {
  branchId: ..., 
  wingId: ..., 
  academicClassId: ..., 
  name: ..., 
};

// Call the `createSectionRef()` function to get a reference to the mutation.
const ref = createSectionRef(createSectionVars);
// Variables can be defined inline as well.
const ref = createSectionRef({ branchId: ..., wingId: ..., academicClassId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSectionRef(dataConnect, createSectionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.section_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.section_insert);
});
```

## RemoveSection
You can execute the `RemoveSection` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeSection(vars: RemoveSectionVariables): MutationPromise<RemoveSectionData, RemoveSectionVariables>;

interface RemoveSectionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveSectionVariables): MutationRef<RemoveSectionData, RemoveSectionVariables>;
}
export const removeSectionRef: RemoveSectionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeSection(dc: DataConnect, vars: RemoveSectionVariables): MutationPromise<RemoveSectionData, RemoveSectionVariables>;

interface RemoveSectionRef {
  ...
  (dc: DataConnect, vars: RemoveSectionVariables): MutationRef<RemoveSectionData, RemoveSectionVariables>;
}
export const removeSectionRef: RemoveSectionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeSectionRef:
```typescript
const name = removeSectionRef.operationName;
console.log(name);
```

### Variables
The `RemoveSection` mutation requires an argument of type `RemoveSectionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveSectionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveSection` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveSectionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveSectionData {
  section_update?: Section_Key | null;
}
```
### Using `RemoveSection`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeSection, RemoveSectionVariables } from '@dataconnect/generated';

// The `RemoveSection` mutation requires an argument of type `RemoveSectionVariables`:
const removeSectionVars: RemoveSectionVariables = {
  id: ..., 
};

// Call the `removeSection()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeSection(removeSectionVars);
// Variables can be defined inline as well.
const { data } = await removeSection({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeSection(dataConnect, removeSectionVars);

console.log(data.section_update);

// Or, you can use the `Promise` API.
removeSection(removeSectionVars).then((response) => {
  const data = response.data;
  console.log(data.section_update);
});
```

### Using `RemoveSection`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeSectionRef, RemoveSectionVariables } from '@dataconnect/generated';

// The `RemoveSection` mutation requires an argument of type `RemoveSectionVariables`:
const removeSectionVars: RemoveSectionVariables = {
  id: ..., 
};

// Call the `removeSectionRef()` function to get a reference to the mutation.
const ref = removeSectionRef(removeSectionVars);
// Variables can be defined inline as well.
const ref = removeSectionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeSectionRef(dataConnect, removeSectionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.section_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.section_update);
});
```

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  firebaseUID: string;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  role: string;
  branchId?: UUIDString | null;
  wingId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  firebaseUID: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  role: ..., 
  branchId: ..., // optional
  wingId: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ firebaseUID: ..., fullName: ..., countryCode: ..., phoneNumber: ..., role: ..., branchId: ..., wingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  firebaseUID: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  role: ..., 
  branchId: ..., // optional
  wingId: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ firebaseUID: ..., fullName: ..., countryCode: ..., phoneNumber: ..., role: ..., branchId: ..., wingId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## ClaimUserFirebaseUID
You can execute the `ClaimUserFirebaseUID` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
claimUserFirebaseUid(vars: ClaimUserFirebaseUidVariables): MutationPromise<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;

interface ClaimUserFirebaseUidRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ClaimUserFirebaseUidVariables): MutationRef<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
}
export const claimUserFirebaseUidRef: ClaimUserFirebaseUidRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
claimUserFirebaseUid(dc: DataConnect, vars: ClaimUserFirebaseUidVariables): MutationPromise<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;

interface ClaimUserFirebaseUidRef {
  ...
  (dc: DataConnect, vars: ClaimUserFirebaseUidVariables): MutationRef<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
}
export const claimUserFirebaseUidRef: ClaimUserFirebaseUidRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the claimUserFirebaseUidRef:
```typescript
const name = claimUserFirebaseUidRef.operationName;
console.log(name);
```

### Variables
The `ClaimUserFirebaseUID` mutation requires an argument of type `ClaimUserFirebaseUidVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ClaimUserFirebaseUidVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `ClaimUserFirebaseUID` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ClaimUserFirebaseUidData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ClaimUserFirebaseUidData {
  user_update?: User_Key | null;
}
```
### Using `ClaimUserFirebaseUID`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, claimUserFirebaseUid, ClaimUserFirebaseUidVariables } from '@dataconnect/generated';

// The `ClaimUserFirebaseUID` mutation requires an argument of type `ClaimUserFirebaseUidVariables`:
const claimUserFirebaseUidVars: ClaimUserFirebaseUidVariables = {
  id: ..., 
};

// Call the `claimUserFirebaseUid()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await claimUserFirebaseUid(claimUserFirebaseUidVars);
// Variables can be defined inline as well.
const { data } = await claimUserFirebaseUid({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await claimUserFirebaseUid(dataConnect, claimUserFirebaseUidVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
claimUserFirebaseUid(claimUserFirebaseUidVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `ClaimUserFirebaseUID`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, claimUserFirebaseUidRef, ClaimUserFirebaseUidVariables } from '@dataconnect/generated';

// The `ClaimUserFirebaseUID` mutation requires an argument of type `ClaimUserFirebaseUidVariables`:
const claimUserFirebaseUidVars: ClaimUserFirebaseUidVariables = {
  id: ..., 
};

// Call the `claimUserFirebaseUidRef()` function to get a reference to the mutation.
const ref = claimUserFirebaseUidRef(claimUserFirebaseUidVars);
// Variables can be defined inline as well.
const ref = claimUserFirebaseUidRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = claimUserFirebaseUidRef(dataConnect, claimUserFirebaseUidVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## CreateParent
You can execute the `CreateParent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createParent(vars: CreateParentVariables): MutationPromise<CreateParentData, CreateParentVariables>;

interface CreateParentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateParentVariables): MutationRef<CreateParentData, CreateParentVariables>;
}
export const createParentRef: CreateParentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createParent(dc: DataConnect, vars: CreateParentVariables): MutationPromise<CreateParentData, CreateParentVariables>;

interface CreateParentRef {
  ...
  (dc: DataConnect, vars: CreateParentVariables): MutationRef<CreateParentData, CreateParentVariables>;
}
export const createParentRef: CreateParentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createParentRef:
```typescript
const name = createParentRef.operationName;
console.log(name);
```

### Variables
The `CreateParent` mutation requires an argument of type `CreateParentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateParentVariables {
  userId?: UUIDString | null;
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}
```
### Return Type
Recall that executing the `CreateParent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateParentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateParentData {
  parent_insert: Parent_Key;
}
```
### Using `CreateParent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createParent, CreateParentVariables } from '@dataconnect/generated';

// The `CreateParent` mutation requires an argument of type `CreateParentVariables`:
const createParentVars: CreateParentVariables = {
  userId: ..., // optional
  branchId: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  address: ..., // optional
};

// Call the `createParent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createParent(createParentVars);
// Variables can be defined inline as well.
const { data } = await createParent({ userId: ..., branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createParent(dataConnect, createParentVars);

console.log(data.parent_insert);

// Or, you can use the `Promise` API.
createParent(createParentVars).then((response) => {
  const data = response.data;
  console.log(data.parent_insert);
});
```

### Using `CreateParent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createParentRef, CreateParentVariables } from '@dataconnect/generated';

// The `CreateParent` mutation requires an argument of type `CreateParentVariables`:
const createParentVars: CreateParentVariables = {
  userId: ..., // optional
  branchId: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  address: ..., // optional
};

// Call the `createParentRef()` function to get a reference to the mutation.
const ref = createParentRef(createParentVars);
// Variables can be defined inline as well.
const ref = createParentRef({ userId: ..., branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createParentRef(dataConnect, createParentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.parent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.parent_insert);
});
```

## CreateParentWithoutUser
You can execute the `CreateParentWithoutUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createParentWithoutUser(vars: CreateParentWithoutUserVariables): MutationPromise<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;

interface CreateParentWithoutUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateParentWithoutUserVariables): MutationRef<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
}
export const createParentWithoutUserRef: CreateParentWithoutUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createParentWithoutUser(dc: DataConnect, vars: CreateParentWithoutUserVariables): MutationPromise<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;

interface CreateParentWithoutUserRef {
  ...
  (dc: DataConnect, vars: CreateParentWithoutUserVariables): MutationRef<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
}
export const createParentWithoutUserRef: CreateParentWithoutUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createParentWithoutUserRef:
```typescript
const name = createParentWithoutUserRef.operationName;
console.log(name);
```

### Variables
The `CreateParentWithoutUser` mutation requires an argument of type `CreateParentWithoutUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateParentWithoutUserVariables {
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}
```
### Return Type
Recall that executing the `CreateParentWithoutUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateParentWithoutUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateParentWithoutUserData {
  parent_insert: Parent_Key;
}
```
### Using `CreateParentWithoutUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createParentWithoutUser, CreateParentWithoutUserVariables } from '@dataconnect/generated';

// The `CreateParentWithoutUser` mutation requires an argument of type `CreateParentWithoutUserVariables`:
const createParentWithoutUserVars: CreateParentWithoutUserVariables = {
  branchId: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  address: ..., // optional
};

// Call the `createParentWithoutUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createParentWithoutUser(createParentWithoutUserVars);
// Variables can be defined inline as well.
const { data } = await createParentWithoutUser({ branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createParentWithoutUser(dataConnect, createParentWithoutUserVars);

console.log(data.parent_insert);

// Or, you can use the `Promise` API.
createParentWithoutUser(createParentWithoutUserVars).then((response) => {
  const data = response.data;
  console.log(data.parent_insert);
});
```

### Using `CreateParentWithoutUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createParentWithoutUserRef, CreateParentWithoutUserVariables } from '@dataconnect/generated';

// The `CreateParentWithoutUser` mutation requires an argument of type `CreateParentWithoutUserVariables`:
const createParentWithoutUserVars: CreateParentWithoutUserVariables = {
  branchId: ..., 
  fullName: ..., 
  countryCode: ..., 
  phoneNumber: ..., 
  address: ..., // optional
};

// Call the `createParentWithoutUserRef()` function to get a reference to the mutation.
const ref = createParentWithoutUserRef(createParentWithoutUserVars);
// Variables can be defined inline as well.
const ref = createParentWithoutUserRef({ branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createParentWithoutUserRef(dataConnect, createParentWithoutUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.parent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.parent_insert);
});
```

## CreateStudent
You can execute the `CreateStudent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createStudent(vars: CreateStudentVariables): MutationPromise<CreateStudentData, CreateStudentVariables>;

interface CreateStudentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStudentVariables): MutationRef<CreateStudentData, CreateStudentVariables>;
}
export const createStudentRef: CreateStudentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createStudent(dc: DataConnect, vars: CreateStudentVariables): MutationPromise<CreateStudentData, CreateStudentVariables>;

interface CreateStudentRef {
  ...
  (dc: DataConnect, vars: CreateStudentVariables): MutationRef<CreateStudentData, CreateStudentVariables>;
}
export const createStudentRef: CreateStudentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createStudentRef:
```typescript
const name = createStudentRef.operationName;
console.log(name);
```

### Variables
The `CreateStudent` mutation requires an argument of type `CreateStudentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateStudentVariables {
  studentId: string;
  admissionYear: number;
  branchCode: string;
  serialNumber: number;
  fullName: string;
  gender?: string | null;
  dateOfBirth?: DateString | null;
  branchId: UUIDString;
  wingId?: UUIDString | null;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  parentId: UUIDString;
  countryCode?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  admissionDate: DateString;
}
```
### Return Type
Recall that executing the `CreateStudent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateStudentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateStudentData {
  studentIdSequence_upsert: StudentIdSequence_Key;
  student_insert: Student_Key;
}
```
### Using `CreateStudent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createStudent, CreateStudentVariables } from '@dataconnect/generated';

// The `CreateStudent` mutation requires an argument of type `CreateStudentVariables`:
const createStudentVars: CreateStudentVariables = {
  studentId: ..., 
  admissionYear: ..., 
  branchCode: ..., 
  serialNumber: ..., 
  fullName: ..., 
  gender: ..., // optional
  dateOfBirth: ..., // optional
  branchId: ..., 
  wingId: ..., // optional
  academicClassId: ..., 
  sectionId: ..., 
  parentId: ..., 
  countryCode: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
  admissionDate: ..., 
};

// Call the `createStudent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createStudent(createStudentVars);
// Variables can be defined inline as well.
const { data } = await createStudent({ studentId: ..., admissionYear: ..., branchCode: ..., serialNumber: ..., fullName: ..., gender: ..., dateOfBirth: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., parentId: ..., countryCode: ..., phoneNumber: ..., address: ..., admissionDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createStudent(dataConnect, createStudentVars);

console.log(data.studentIdSequence_upsert);
console.log(data.student_insert);

// Or, you can use the `Promise` API.
createStudent(createStudentVars).then((response) => {
  const data = response.data;
  console.log(data.studentIdSequence_upsert);
  console.log(data.student_insert);
});
```

### Using `CreateStudent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createStudentRef, CreateStudentVariables } from '@dataconnect/generated';

// The `CreateStudent` mutation requires an argument of type `CreateStudentVariables`:
const createStudentVars: CreateStudentVariables = {
  studentId: ..., 
  admissionYear: ..., 
  branchCode: ..., 
  serialNumber: ..., 
  fullName: ..., 
  gender: ..., // optional
  dateOfBirth: ..., // optional
  branchId: ..., 
  wingId: ..., // optional
  academicClassId: ..., 
  sectionId: ..., 
  parentId: ..., 
  countryCode: ..., // optional
  phoneNumber: ..., // optional
  address: ..., // optional
  admissionDate: ..., 
};

// Call the `createStudentRef()` function to get a reference to the mutation.
const ref = createStudentRef(createStudentVars);
// Variables can be defined inline as well.
const ref = createStudentRef({ studentId: ..., admissionYear: ..., branchCode: ..., serialNumber: ..., fullName: ..., gender: ..., dateOfBirth: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., parentId: ..., countryCode: ..., phoneNumber: ..., address: ..., admissionDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createStudentRef(dataConnect, createStudentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.studentIdSequence_upsert);
console.log(data.student_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.studentIdSequence_upsert);
  console.log(data.student_insert);
});
```

## CreateAttendance
You can execute the `CreateAttendance` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createAttendance(vars: CreateAttendanceVariables): MutationPromise<CreateAttendanceData, CreateAttendanceVariables>;

interface CreateAttendanceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAttendanceVariables): MutationRef<CreateAttendanceData, CreateAttendanceVariables>;
}
export const createAttendanceRef: CreateAttendanceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAttendance(dc: DataConnect, vars: CreateAttendanceVariables): MutationPromise<CreateAttendanceData, CreateAttendanceVariables>;

interface CreateAttendanceRef {
  ...
  (dc: DataConnect, vars: CreateAttendanceVariables): MutationRef<CreateAttendanceData, CreateAttendanceVariables>;
}
export const createAttendanceRef: CreateAttendanceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAttendanceRef:
```typescript
const name = createAttendanceRef.operationName;
console.log(name);
```

### Variables
The `CreateAttendance` mutation requires an argument of type `CreateAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAttendanceVariables {
  studentId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  attendanceDate: DateString;
  status: string;
  markedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that executing the `CreateAttendance` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAttendanceData {
  attendance_insert: Attendance_Key;
}
```
### Using `CreateAttendance`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAttendance, CreateAttendanceVariables } from '@dataconnect/generated';

// The `CreateAttendance` mutation requires an argument of type `CreateAttendanceVariables`:
const createAttendanceVars: CreateAttendanceVariables = {
  studentId: ..., 
  academicClassId: ..., 
  sectionId: ..., 
  attendanceDate: ..., 
  status: ..., 
  markedById: ..., 
  remarks: ..., // optional
};

// Call the `createAttendance()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAttendance(createAttendanceVars);
// Variables can be defined inline as well.
const { data } = await createAttendance({ studentId: ..., academicClassId: ..., sectionId: ..., attendanceDate: ..., status: ..., markedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAttendance(dataConnect, createAttendanceVars);

console.log(data.attendance_insert);

// Or, you can use the `Promise` API.
createAttendance(createAttendanceVars).then((response) => {
  const data = response.data;
  console.log(data.attendance_insert);
});
```

### Using `CreateAttendance`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAttendanceRef, CreateAttendanceVariables } from '@dataconnect/generated';

// The `CreateAttendance` mutation requires an argument of type `CreateAttendanceVariables`:
const createAttendanceVars: CreateAttendanceVariables = {
  studentId: ..., 
  academicClassId: ..., 
  sectionId: ..., 
  attendanceDate: ..., 
  status: ..., 
  markedById: ..., 
  remarks: ..., // optional
};

// Call the `createAttendanceRef()` function to get a reference to the mutation.
const ref = createAttendanceRef(createAttendanceVars);
// Variables can be defined inline as well.
const ref = createAttendanceRef({ studentId: ..., academicClassId: ..., sectionId: ..., attendanceDate: ..., status: ..., markedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAttendanceRef(dataConnect, createAttendanceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.attendance_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.attendance_insert);
});
```

## UpdateAttendance
You can execute the `UpdateAttendance` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateAttendance(vars: UpdateAttendanceVariables): MutationPromise<UpdateAttendanceData, UpdateAttendanceVariables>;

interface UpdateAttendanceRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAttendanceVariables): MutationRef<UpdateAttendanceData, UpdateAttendanceVariables>;
}
export const updateAttendanceRef: UpdateAttendanceRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAttendance(dc: DataConnect, vars: UpdateAttendanceVariables): MutationPromise<UpdateAttendanceData, UpdateAttendanceVariables>;

interface UpdateAttendanceRef {
  ...
  (dc: DataConnect, vars: UpdateAttendanceVariables): MutationRef<UpdateAttendanceData, UpdateAttendanceVariables>;
}
export const updateAttendanceRef: UpdateAttendanceRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAttendanceRef:
```typescript
const name = updateAttendanceRef.operationName;
console.log(name);
```

### Variables
The `UpdateAttendance` mutation requires an argument of type `UpdateAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAttendanceVariables {
  id: UUIDString;
  status: string;
  editedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that executing the `UpdateAttendance` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAttendanceData {
  attendance_update?: Attendance_Key | null;
}
```
### Using `UpdateAttendance`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAttendance, UpdateAttendanceVariables } from '@dataconnect/generated';

// The `UpdateAttendance` mutation requires an argument of type `UpdateAttendanceVariables`:
const updateAttendanceVars: UpdateAttendanceVariables = {
  id: ..., 
  status: ..., 
  editedById: ..., 
  remarks: ..., // optional
};

// Call the `updateAttendance()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAttendance(updateAttendanceVars);
// Variables can be defined inline as well.
const { data } = await updateAttendance({ id: ..., status: ..., editedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAttendance(dataConnect, updateAttendanceVars);

console.log(data.attendance_update);

// Or, you can use the `Promise` API.
updateAttendance(updateAttendanceVars).then((response) => {
  const data = response.data;
  console.log(data.attendance_update);
});
```

### Using `UpdateAttendance`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAttendanceRef, UpdateAttendanceVariables } from '@dataconnect/generated';

// The `UpdateAttendance` mutation requires an argument of type `UpdateAttendanceVariables`:
const updateAttendanceVars: UpdateAttendanceVariables = {
  id: ..., 
  status: ..., 
  editedById: ..., 
  remarks: ..., // optional
};

// Call the `updateAttendanceRef()` function to get a reference to the mutation.
const ref = updateAttendanceRef(updateAttendanceVars);
// Variables can be defined inline as well.
const ref = updateAttendanceRef({ id: ..., status: ..., editedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAttendanceRef(dataConnect, updateAttendanceVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.attendance_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.attendance_update);
});
```

## UploadFeePayment
You can execute the `UploadFeePayment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
uploadFeePayment(vars: UploadFeePaymentVariables): MutationPromise<UploadFeePaymentData, UploadFeePaymentVariables>;

interface UploadFeePaymentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UploadFeePaymentVariables): MutationRef<UploadFeePaymentData, UploadFeePaymentVariables>;
}
export const uploadFeePaymentRef: UploadFeePaymentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
uploadFeePayment(dc: DataConnect, vars: UploadFeePaymentVariables): MutationPromise<UploadFeePaymentData, UploadFeePaymentVariables>;

interface UploadFeePaymentRef {
  ...
  (dc: DataConnect, vars: UploadFeePaymentVariables): MutationRef<UploadFeePaymentData, UploadFeePaymentVariables>;
}
export const uploadFeePaymentRef: UploadFeePaymentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the uploadFeePaymentRef:
```typescript
const name = uploadFeePaymentRef.operationName;
console.log(name);
```

### Variables
The `UploadFeePayment` mutation requires an argument of type `UploadFeePaymentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UploadFeePaymentVariables {
  studentId: UUIDString;
  studentFeeId: UUIDString;
  amount: number;
  paymentMode: string;
  receiptNumber?: string | null;
  uploadedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that executing the `UploadFeePayment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UploadFeePaymentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UploadFeePaymentData {
  payment_insert: Payment_Key;
}
```
### Using `UploadFeePayment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, uploadFeePayment, UploadFeePaymentVariables } from '@dataconnect/generated';

// The `UploadFeePayment` mutation requires an argument of type `UploadFeePaymentVariables`:
const uploadFeePaymentVars: UploadFeePaymentVariables = {
  studentId: ..., 
  studentFeeId: ..., 
  amount: ..., 
  paymentMode: ..., 
  receiptNumber: ..., // optional
  uploadedById: ..., 
  remarks: ..., // optional
};

// Call the `uploadFeePayment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await uploadFeePayment(uploadFeePaymentVars);
// Variables can be defined inline as well.
const { data } = await uploadFeePayment({ studentId: ..., studentFeeId: ..., amount: ..., paymentMode: ..., receiptNumber: ..., uploadedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await uploadFeePayment(dataConnect, uploadFeePaymentVars);

console.log(data.payment_insert);

// Or, you can use the `Promise` API.
uploadFeePayment(uploadFeePaymentVars).then((response) => {
  const data = response.data;
  console.log(data.payment_insert);
});
```

### Using `UploadFeePayment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, uploadFeePaymentRef, UploadFeePaymentVariables } from '@dataconnect/generated';

// The `UploadFeePayment` mutation requires an argument of type `UploadFeePaymentVariables`:
const uploadFeePaymentVars: UploadFeePaymentVariables = {
  studentId: ..., 
  studentFeeId: ..., 
  amount: ..., 
  paymentMode: ..., 
  receiptNumber: ..., // optional
  uploadedById: ..., 
  remarks: ..., // optional
};

// Call the `uploadFeePaymentRef()` function to get a reference to the mutation.
const ref = uploadFeePaymentRef(uploadFeePaymentVars);
// Variables can be defined inline as well.
const ref = uploadFeePaymentRef({ studentId: ..., studentFeeId: ..., amount: ..., paymentMode: ..., receiptNumber: ..., uploadedById: ..., remarks: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = uploadFeePaymentRef(dataConnect, uploadFeePaymentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.payment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.payment_insert);
});
```

## AssignTeacher
You can execute the `AssignTeacher` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignTeacher(vars: AssignTeacherVariables): MutationPromise<AssignTeacherData, AssignTeacherVariables>;

interface AssignTeacherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignTeacherVariables): MutationRef<AssignTeacherData, AssignTeacherVariables>;
}
export const assignTeacherRef: AssignTeacherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignTeacher(dc: DataConnect, vars: AssignTeacherVariables): MutationPromise<AssignTeacherData, AssignTeacherVariables>;

interface AssignTeacherRef {
  ...
  (dc: DataConnect, vars: AssignTeacherVariables): MutationRef<AssignTeacherData, AssignTeacherVariables>;
}
export const assignTeacherRef: AssignTeacherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignTeacherRef:
```typescript
const name = assignTeacherRef.operationName;
console.log(name);
```

### Variables
The `AssignTeacher` mutation requires an argument of type `AssignTeacherVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignTeacherVariables {
  teacherId: UUIDString;
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  subjectName?: string | null;
  isClassTeacher: boolean;
}
```
### Return Type
Recall that executing the `AssignTeacher` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignTeacherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignTeacherData {
  teacherAssignment_insert: TeacherAssignment_Key;
}
```
### Using `AssignTeacher`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignTeacher, AssignTeacherVariables } from '@dataconnect/generated';

// The `AssignTeacher` mutation requires an argument of type `AssignTeacherVariables`:
const assignTeacherVars: AssignTeacherVariables = {
  teacherId: ..., 
  branchId: ..., 
  wingId: ..., 
  academicClassId: ..., 
  sectionId: ..., 
  subjectName: ..., // optional
  isClassTeacher: ..., 
};

// Call the `assignTeacher()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignTeacher(assignTeacherVars);
// Variables can be defined inline as well.
const { data } = await assignTeacher({ teacherId: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., subjectName: ..., isClassTeacher: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignTeacher(dataConnect, assignTeacherVars);

console.log(data.teacherAssignment_insert);

// Or, you can use the `Promise` API.
assignTeacher(assignTeacherVars).then((response) => {
  const data = response.data;
  console.log(data.teacherAssignment_insert);
});
```

### Using `AssignTeacher`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignTeacherRef, AssignTeacherVariables } from '@dataconnect/generated';

// The `AssignTeacher` mutation requires an argument of type `AssignTeacherVariables`:
const assignTeacherVars: AssignTeacherVariables = {
  teacherId: ..., 
  branchId: ..., 
  wingId: ..., 
  academicClassId: ..., 
  sectionId: ..., 
  subjectName: ..., // optional
  isClassTeacher: ..., 
};

// Call the `assignTeacherRef()` function to get a reference to the mutation.
const ref = assignTeacherRef(assignTeacherVars);
// Variables can be defined inline as well.
const ref = assignTeacherRef({ teacherId: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., subjectName: ..., isClassTeacher: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignTeacherRef(dataConnect, assignTeacherVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.teacherAssignment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.teacherAssignment_insert);
});
```

